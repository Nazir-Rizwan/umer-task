import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { MulterError } from 'multer';

@Catch(MulterError)
export class MulterExceptionFilter implements ExceptionFilter {
  catch(exception: MulterError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const message = exception.message || 'File upload error';
    res.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, error: 'Bad Request', message });
  }
}
