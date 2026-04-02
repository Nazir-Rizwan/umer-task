import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogStatus, Prisma } from '../../prisma/generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { BlogQueryDto } from './dto/blog-query.dto';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const slugify = require('slugify') as (s: string, opts?: object) => string;

const BLOG_SELECT = {
  id: true,
  title: true,
  slug: true,
  content: true,
  coverImageUrl: true,
  metaTitle: true,
  metaDescription: true,
  readTimeMinutes: true,
  status: true,
  publishedAt: true,
  adminId: true,
  createdAt: true,
  updatedAt: true,
  blogKeywords: {
    select: {
      keyword: { select: { id: true, name: true } },
    },
  },
} satisfies Prisma.BlogSelect;

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── helpers ───────────────────────────────────────────────────────

  private toSlug(title: string): string {
    return slugify(title, { lower: true, strict: true, trim: true });
  }

  private async generateUniqueSlug(title: string, excludeId?: number): Promise<string> {
    const base = this.toSlug(title);
    let candidate = base;
    let counter = 1;

    while (true) {
      const existing = await this.prisma.blog.findUnique({ where: { slug: candidate } });
      if (!existing || existing.id === excludeId) return candidate;
      candidate = `${base}-${counter++}`;
    }
  }

  private buildSearchWhere(search?: string): Prisma.BlogWhereInput {
    if (!search?.trim()) return {};
    return {
      OR: [
        { title: { contains: search, mode: 'insensitive' } },
        {
          blogKeywords: {
            some: { keyword: { name: { contains: search, mode: 'insensitive' } } },
          },
        },
      ],
    };
  }

  // ─── admin CRUD ────────────────────────────────────────────────────

  async create(dto: CreateBlogDto, adminId: number) {
    const { keywordIds, status, ...rest } = dto;
    const slug = await this.generateUniqueSlug(dto.title);
    const isPublished = status === BlogStatus.PUBLISHED;

    return this.prisma.blog.create({
      data: {
        ...rest,
        slug,
        status: status ?? BlogStatus.DRAFT,
        publishedAt: isPublished ? new Date() : null,
        admin: { connect: { id: adminId } },
        blogKeywords: keywordIds?.length
          ? { create: keywordIds.map((keywordId) => ({ keywordId })) }
          : undefined,
      },
      select: BLOG_SELECT,
    });
  }

  async findAll(query: BlogQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;
    const where = this.buildSearchWhere(query.search);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.blog.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' }, select: BLOG_SELECT }),
      this.prisma.blog.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findPublished(query: BlogQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;
    const where: Prisma.BlogWhereInput = {
      status: BlogStatus.PUBLISHED,
      ...this.buildSearchWhere(query.search),
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.blog.findMany({ where, skip, take: limit, orderBy: { publishedAt: 'desc' }, select: BLOG_SELECT }),
      this.prisma.blog.count({ where }),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: number) {
    const blog = await this.prisma.blog.findUnique({ where: { id }, select: BLOG_SELECT });
    if (!blog) throw new NotFoundException(`Blog #${id} not found`);
    return blog;
  }

  async findBySlug(slug: string) {
    const blog = await this.prisma.blog.findUnique({ where: { slug }, select: BLOG_SELECT });
    if (!blog) throw new NotFoundException(`Blog with slug "${slug}" not found`);
    return blog;
  }

  async findPublishedBySlug(slug: string) {
    const blog = await this.prisma.blog.findFirst({
      where: { slug, status: BlogStatus.PUBLISHED },
      select: BLOG_SELECT,
    });
    if (!blog) throw new NotFoundException(`Blog not found`);
    return blog;
  }

  async update(id: number, dto: UpdateBlogDto) {
    await this.findOne(id);
    const { keywordIds, status, title, ...rest } = dto;

    const slug = title ? await this.generateUniqueSlug(title, id) : undefined;

    let publishedAt: Date | null | undefined;
    if (status === BlogStatus.PUBLISHED) {
      const current = await this.prisma.blog.findUnique({ where: { id }, select: { status: true } });
      if (current?.status !== BlogStatus.PUBLISHED) publishedAt = new Date();
    } else if (status === BlogStatus.DRAFT) {
      publishedAt = null;
    }

    return this.prisma.blog.update({
      where: { id },
      data: {
        ...rest,
        ...(title && { title }),
        ...(slug && { slug }),
        ...(status && { status }),
        ...(publishedAt !== undefined && { publishedAt }),
        ...(keywordIds !== undefined && {
          blogKeywords: {
            deleteMany: {},
            create: keywordIds.map((keywordId) => ({ keywordId })),
          },
        }),
      },
      select: BLOG_SELECT,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.blog.delete({ where: { id } });
    return { message: `Blog #${id} deleted` };
  }

  async getStats() {
    const [total, published, drafts] = await this.prisma.$transaction([
      this.prisma.blog.count(),
      this.prisma.blog.count({ where: { status: BlogStatus.PUBLISHED } }),
      this.prisma.blog.count({ where: { status: BlogStatus.DRAFT } }),
    ]);
    return { total, published, drafts };
  }
}
