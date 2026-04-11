import 'dotenv/config';
import { setDefaultResultOrder } from 'dns';
import { setDefaultAutoSelectFamily } from 'net';
// Node v24 uses Happy Eyeballs v2: tries all DNS addresses (IPv4 + IPv6) at
// once with only a 250 ms window. IPv6 is unreachable on this machine, and the
// SSL handshake over IPv4 takes longer than 250 ms, so every connection dies
// with ETIMEDOUT before finishing. Fix: prefer IPv4 DNS + disable the race.
setDefaultResultOrder('ipv4first');
setDefaultAutoSelectFamily(false);
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';
import { MulterExceptionFilter } from './common/filters/multer-exception.filter';
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

  // Allow all origins (reflect request origin). Keeps credentials enabled.
  // This effectively accepts requests from any origin. If you prefer a
  // restrictive policy later, we can switch to a whitelist or denylist.
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // global Multer error filter to return clear JSON for upload errors
  app.useGlobalFilters(new MulterExceptionFilter());


  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
