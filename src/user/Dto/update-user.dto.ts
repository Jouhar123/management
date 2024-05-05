import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from '../schema/user.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  Name: string;

  @IsOptional()
  @IsEmail()
  Email: string;

  @IsOptional()
  @IsEnum(Role)
  Role: Role;

  @IsOptional()
  @IsString()
  Password: string;
}
