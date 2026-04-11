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

  // Allow localhost dev ports and Vercel deployments whose hostnames
  // start with `umer-task` and end with `.vercel.app`.
  // Note: CORS checks only the origin (scheme + host + port). Paths
  // such as `/blog` are NOT part of the origin and cannot be used here.
  const allowedExact = new Set([
    'http://localhost:3001',
    'http://localhost:3002',
    'https://umer-task.vercel.app',
  ]);

  // Matches origins like:
  // https://umer-task-6f0tfrw1c-advisorengage-7010s-projects.vercel.app
  // and also https://umer-task-some-other.vercel.app
  const vercelRegex = /^https:\/\/umer-task[0-9A-Za-z-_.-]*\.vercel\.app$/i;

  app.enableCors({
    origin: (origin, callback) => {
      // If no origin (server-to-server, curl, same-origin), allow
      if (!origin) return callback(null, true);
      if (allowedExact.has(origin) || vercelRegex.test(origin)) return callback(null, true);
      return callback(new Error('Origin not allowed by CORS'), false);
    },
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
