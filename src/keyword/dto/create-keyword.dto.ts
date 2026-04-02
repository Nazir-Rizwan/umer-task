import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateKeywordDto {
  @IsString()
  @MinLength(2, { message: 'Keyword must be at least 2 characters' })
  @MaxLength(50, { message: 'Keyword must not exceed 50 characters' })
  name: string;
}
