import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator';
import { Role } from '../schema/user.schema';
import { use } from 'passport';

export class CreateUserDto {
 
  
  
  @IsNotEmpty()
  @IsString()
  Name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Email must be a valid email address" })
  Email: string;

  @IsNotEmpty()
  @IsEnum(Role)
  Role: Role;

  @IsNotEmpty()
  @IsString()
  Password: string;
  @IsOptional() 
  Branch: string;


 
}
