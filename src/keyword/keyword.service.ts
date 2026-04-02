import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';

@Injectable()
export class KeywordService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.keyword.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    });
  }

  async create(dto: CreateKeywordDto) {
    const name = dto.name.trim().toLowerCase();
    const existing = await this.prisma.keyword.findUnique({ where: { name } });
    if (existing) throw new ConflictException(`Keyword "${name}" already exists`);

    return this.prisma.keyword.create({
      data: { name },
      select: { id: true, name: true },
    });
  }

  async remove(id: number) {
    const kw = await this.prisma.keyword.findUnique({ where: { id } });
    if (!kw) throw new NotFoundException(`Keyword #${id} not found`);
    await this.prisma.keyword.delete({ where: { id } });
    return { message: `Keyword #${id} deleted` };
  }
}
