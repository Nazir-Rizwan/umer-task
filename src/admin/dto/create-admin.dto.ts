import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '../../../prisma/generated/prisma/enums';

export class CreateAdminDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

  @IsOptional()
  @IsEnum(Role, { message: 'Role must be ADMIN or SUPER_ADMIN' })
  role?: Role;
}
