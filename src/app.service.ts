import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }
  getHello(): string {
    return 'Hello World!';
  }

  async createUser(name: string, email: string) {
    return this.prisma.user.create({
      data: { name, email },
    });
  }
}
