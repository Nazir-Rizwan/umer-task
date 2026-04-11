import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { BlogStatus } from '../../../prisma/generated/prisma/client';

export class CreateBlogDto {
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters' })
  title: string;

  @IsOptional()
  @IsString()
  content?: string;

  // @IsUrl({ require_tld: false }, { message: 'coverImageUrl must be a valid URL' })
  @IsOptional()
  coverImageUrl?: string;

  @IsString()
  @MaxLength(70, { message: 'Meta title should not exceed 70 characters' })
  metaTitle: string;

  @IsString()
  @MaxLength(160, { message: 'Meta description should not exceed 160 characters' })
  metaDescription: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  readTimeMinutes?: number;

  @IsOptional()
  @IsEnum(BlogStatus)
  status?: BlogStatus;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  keywordIds?: number[];
}
