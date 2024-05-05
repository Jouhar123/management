import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateHotelRoom {
  
    @IsOptional()
    @IsNumber()
    RoomNumber: number;  
    @IsOptional()
    @IsString()
    roomType: string;  
    @IsOptional()
    @IsString({ each: true }) // Validate each string in the array
    amenities: string[];
    @IsOptional()
    @IsBoolean()
    Is_act: boolean;
    @IsOptional()
    @IsBoolean()
    Available: Boolean;
}