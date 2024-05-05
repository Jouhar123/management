import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';


export class CreateRoomStatusDto {

  Room: string;

  @IsNumber()
  @IsNotEmpty()
  RoomNo: number;

  @IsBoolean()
  @IsNotEmpty()
  Available: Boolean;

  
}
