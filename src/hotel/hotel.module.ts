import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HotelSchema } from "./Schema/hotel.schema";
import { HotelController } from "./hotel.controller";
import { HotelService } from "./hotel.service";
import { AuthModule } from "src/auth/auth.module";




@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Hotel', schema: HotelSchema }
  ]),AuthModule],
  controllers: [HotelController],
  providers: [HotelService],
  exports: [MongooseModule]
})
export class HotelModule {}

