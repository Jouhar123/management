
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto{
    @IsString()
    @IsNotEmpty()
    Name:string;

    @IsString()
    @IsEmail()
    Email:string;

    @IsString()
    @IsNotEmpty()
    Password:string;

    @IsNotEmpty()
    @IsString()
    Hotel_Name:string;


}