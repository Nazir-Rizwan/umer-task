import { ApiProperty } from '@nestjs/swagger';

export class UploadImageResponseDto {
  @ApiProperty({ description: 'Secure URL of the uploaded image' })
  url: string;

  @ApiProperty({ description: 'Cloudinary public id for the uploaded image' })
  publicId: string;
}
