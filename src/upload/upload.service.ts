import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require('sharp') as typeof import('sharp');

@Injectable()
export class UploadService {
  private readonly uploadDir = join(process.cwd(), 'uploads');

  constructor() {
    if (!existsSync(this.uploadDir)) {
      mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async processAndSave(file: Express.Multer.File): Promise<{ url: string }> {
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;
    const filepath = join(this.uploadDir, filename);

    await sharp(file.buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(filepath);

    const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:3000';
    return { url: `${baseUrl}/uploads/${filename}` };
  }
}
