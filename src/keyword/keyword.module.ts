import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { KeywordController } from './keyword.controller';
import { KeywordService } from './keyword.service';

@Module({
  imports: [PrismaModule],
  controllers: [KeywordController],
  providers: [KeywordService],
})
export class KeywordModule {}
