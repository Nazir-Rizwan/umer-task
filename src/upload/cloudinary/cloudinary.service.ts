import { Injectable, Logger } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    private readonly logger = new Logger(CloudinaryService.name);

    constructor() {
        // prefer CLOUDINARY_URL if provided, otherwise configure from separate vars
        const cloudinaryUrl = process.env.CLOUDINARY_URL;
        if (cloudinaryUrl) {
            try {
                // cloudinary.config accepts a cloudinary_url property
                // @ts-ignore - package typings are flexible here
                cloudinary.config({ cloudinary_url: cloudinaryUrl });
                this.logger.log('Cloudinary configured from CLOUDINARY_URL');
            } catch (err) {
                this.logger.error('Failed to configure Cloudinary from CLOUDINARY_URL', err as any);
            }
        } else if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET,
            });
            this.logger.log('Cloudinary configured from individual env vars');
        } else {
            this.logger.warn('Cloudinary not configured — missing env vars');
        }
    }

    async uploadImage(file: Express.Multer.File, folder = 'uploads'): Promise<{ url: string; publicId: string }> {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ folder }, (error, result: UploadApiResponse) => {
                if (error) return reject(error);
                if (!result) return reject(new Error('No result from Cloudinary'));
                resolve({ url: result.secure_url as string, publicId: result.public_id as string });
            });

            uploadStream.end(file.buffer);
        });
    }

    async deleteImage(publicId: string): Promise<boolean> {
        try {
            const res = await cloudinary.uploader.destroy(publicId);
            return res.result === 'ok' || res.result === 'not found';
        } catch (err) {
            this.logger.error('Error deleting Cloudinary image', err as any);
            return false;
        }
    }
}
