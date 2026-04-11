import {
    BadRequestException,
    Body,
    Controller,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CloudinaryService } from './cloudinary.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadImageResponseDto } from './dto/upload-image-response.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('upload')
@ApiBearerAuth()
@Controller('upload/cloudinary')
export class CloudinaryController {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private readonly prisma: PrismaService,
    ) { }

    @Post('image')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Image file (png, jpg, webp, etc.)',
                },
            },
        },
    })
    @ApiOkResponse({ description: 'Uploaded image', type: UploadImageResponseDto })
    @UseInterceptors(
        FileInterceptor('file', {
            storage: memoryStorage(),
            limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
            fileFilter: (_, file, cb) => {
                if (!file.mimetype.startsWith('image/')) {
                    return cb(new BadRequestException('Only image files are allowed'), false);
                }
                cb(null, true);
            },
        }),
    )
    async uploadImage(
        @UploadedFile() file: Express.Multer.File,
        @Body('blogId') blogId?: string,
    ): Promise<UploadImageResponseDto> {
        if (!file) throw new BadRequestException('No file provided');

        let blogIdNum: number | undefined;
        if (blogId) {
            blogIdNum = Number(blogId);
            if (Number.isNaN(blogIdNum)) throw new BadRequestException('Invalid blogId');
            const blog = await this.prisma.blog.findUnique({ where: { id: blogIdNum } });
            if (!blog) throw new BadRequestException('Blog not found');
        }

        const { url, publicId } = await this.cloudinaryService.uploadImage(file, 'umer-task');

        // create image record linked to blog (if provided)
        const image = await this.prisma.image.create({
            data: {
                url,
                publicId,
                type: 'cover',
                blogId: blogIdNum ?? undefined,
            },
        });

        // if this is a cover image and blog provided, update blog.coverImageUrl for backward compatibility
        if (blogIdNum) {
            await this.prisma.blog.update({ where: { id: blogIdNum }, data: { coverImageUrl: url } });
        }

        return { url: image.url, publicId: image.publicId };
    }
}
