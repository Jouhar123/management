import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHotelOwnerDetailDto {
  @IsString()
    
      name: string;

  @IsString()
    
      email: string;

  @IsString()
    
      mobileNumber: string;

  @IsString()
    
      panNumber: string;

  @IsString()
    
      aadharNo: string;

  @IsString()
    
      pan: string;

  @IsString()
    
      aadhar: string;
}

export class CreateHotelDetailDto {
  @IsString()
    
      hotelName: string;

  @IsString()
    
      hotelEmail: string;

  @IsString()
    
      hotelWebsite: string;

  @IsString()
    
      hotelAddress: string;

  @IsString()
    
      businessPan: string;

  @IsString()
    
      gstCertificate: string;

  @IsString()
    
      longitude: string;

  @IsString()
    
      latitude: string;

  @IsString()
    
      gpsLocation: string;

  @IsString()
    
      pincode: string;

  @IsString()
    
      city: string;

  @IsString()
    
      landmark: string;

  @IsNumber()
    
      totalRoom: number;
}

export class CreateRoomDetailDto {
  @IsString()
    
      roomNumber: string;

  @IsString()
    
      roomType: string;

  @IsArray()
    
      amenities: string[];

  @IsNumber()
    
      price: number;
}

export class onboard_ChecklistDto {
  @IsNumber()
    
      serialNumber: number;

    
      onboardId: string;

  @IsNumber()
    
      hotelId: number;

    
      hotelOwnerDetail: CreateHotelOwnerDetailDto;

    
      hotelDetail: CreateHotelDetailDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRoomDetailDto)
      roomsDetail: CreateRoomDetailDto[];

  @IsBoolean()
    
      verification: boolean;
}



