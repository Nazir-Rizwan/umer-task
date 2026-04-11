import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { KeywordModule } from './keyword/keyword.module';
import { UploadModule } from './upload/upload.module';
import { CloudinaryModule } from './upload/cloudinary/cloudinary.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60_000, limit: 10 }], // 10 login attempts per minute
    }),
    PrismaModule,
    AuthModule,
    AdminModule,
    BlogModule,
    KeywordModule,
    UploadModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
