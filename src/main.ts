import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // strips unknown fields from body
      forbidNonWhitelisted: true, // throws error for unknown fields
      transform: true,        // auto-transforms types (e.g. string "1" -> number 1)
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true, // allow cookies
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
