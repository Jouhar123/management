import { PartialType } from "@nestjs/mapped-types";
import { CreateHotelDto } from "./create-hotel.dto";


//--- here using mapped type functionality partialtype  to use same elemant of createhoteldto but as optional also use omit to exclude elements   -----------
export class UpdateHotelDto extends PartialType(CreateHotelDto) { }

// import { IsBoolean, IsNotEmpty,IsString} from 'class-validator';

// export class UpdateHotelDto{

//   @IsString()
//   @IsNotEmpty()
//   name: string;

//   @IsString()
//   @IsNotEmpty()
//   address: string;

//   @IsString()
//   @IsNotEmpty()
//   landmark: string;

//   @IsBoolean()
//   onboard: boolean;
//
