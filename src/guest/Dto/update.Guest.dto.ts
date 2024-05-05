import { IsEmail, IsNumber, IsOptional, IsString, ArrayNotEmpty, ArrayMinSize, Min } from 'class-validator';

export class UpdateGuestDto {
    @IsOptional()
    @IsString()
    firstName: string;
    @IsOptional()
    @IsString()
    lastName: string;
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    phone: number;

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    roomNumber: string[];

    @IsOptional()
    @IsNumber()
    @Min(100000000000) 
    aadhaar: number;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    numberOfGuests: number;
}
