import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHotelRoom {
   

    hotel_name:string;
    @IsNotEmpty()
    @IsNumber()
    RoomNumber: number;  
    @IsNotEmpty()
    @IsString()
    roomType: string;  
    @IsString({ each: true }) // Validate each string in the array
    amenities: string[];
    @IsNotEmpty()
    @IsBoolean()
    Is_act: boolean;
    @IsNotEmpty()
    @IsBoolean()
    Available: Boolean;
}