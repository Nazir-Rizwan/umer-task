import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

const SAFE_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(createAdminDto: CreateAdminDto) {
    const existing = await this.prisma.admin.findUnique({
      where: { email: createAdminDto.email },
    });

    if (existing) {
      throw new ConflictException('An admin with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);

    return this.prisma.admin.create({
      data: { ...createAdminDto, password: hashedPassword },
      select: SAFE_SELECT,
    });
  }

  async findAll() {
    return this.prisma.admin.findMany({ select: SAFE_SELECT });
  }

  async findOne(id: number) {
    const admin = await this.prisma.admin.findUnique({
      where: { id },
      select: SAFE_SELECT,
    });

    if (!admin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }

    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.findOne(id);

    const data: Record<string, unknown> = { ...updateAdminDto };

    if (updateAdminDto.password) {
      data.password = await bcrypt.hash(updateAdminDto.password, 10);
    }

    return this.prisma.admin.update({
      where: { id },
      data,
      select: SAFE_SELECT,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.admin.delete({ where: { id } });
    return { message: `Admin #${id} deleted successfully` };
  }
}
