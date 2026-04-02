import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BlogService } from './blog.service';
import { BlogQueryDto } from './dto/blog-query.dto';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // ─── Public routes (no JWT) ────────────────────────────────────────

  /** Stats — must come before :id */
  @UseGuards(JwtAuthGuard)
  @Get('stats')
  getStats() {
    return this.blogService.getStats();
  }

  /** Paginated published blogs for the public site */
  @Get('published')
  findPublished(@Query() query: BlogQueryDto) {
    return this.blogService.findPublished(query);
  }

  /** Single published blog by slug — public, no JWT */
  @Get('slug/:slug')
  findPublishedBySlug(@Param('slug') slug: string) {
    return this.blogService.findPublishedBySlug(slug);
  }

  // ─── Admin routes (JWT required) ──────────────────────────────────

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateBlogDto, @Request() req: { user: { id: number } }) {
    return this.blogService.create(dto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: BlogQueryDto) {
    return this.blogService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBlogDto) {
    return this.blogService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.remove(id);
  }
}
