import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class UpdateRoomStatusDto {

 
  @IsNumber()
  @IsOptional()
  RoomNo?: number;

  @IsBoolean()
  @IsNotEmpty()
  Available: Boolean; 
}