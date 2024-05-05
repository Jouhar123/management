import { Module } from '@nestjs/common';
import { RoomStatusService } from './room-status.service';
import { RoomStatusController } from './room-status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomStatusSchema } from './Schema/Roomstatus.schema';
import { HotelRoomService } from 'src/hotel-room/hotel-room.service';
import { HotelRoomModule } from 'src/hotel-room/hotel-room.module';
import { HotelService } from 'src/hotel/hotel.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'RoomStatus' ,schema:RoomStatusSchema}]),
  HotelRoomModule],
  providers: [RoomStatusService,HotelRoomService,HotelService],
  controllers: [RoomStatusController]
})
export class RoomStatusModule {}
