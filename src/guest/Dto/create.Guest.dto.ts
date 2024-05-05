
import { IsEmail, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize, Min, IsNotEmpty } from 'class-validator';

export class CreateGuestDto {

  // userid:string;
  
  useremail:string;
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  roomNumber: string[];

  @IsNotEmpty()
  @IsNumber()
  @Min(100000000000)
  aadhaar: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  numberOfGuests: number;


}
