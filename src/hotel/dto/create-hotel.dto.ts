import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateHotelDto {

  // userId:string;

  // hotelId:string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  landmark: string;

  @IsBoolean()
  onboard: boolean = false;
}
