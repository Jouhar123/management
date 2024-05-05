import { Module } from '@nestjs/common';
import { HotelRoomService } from './hotel-room.service';
import { HotelRoomController } from './hotel-room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelRoomSchema } from './schema/HotelRoom.schema';
import { HotelService } from 'src/hotel/hotel.service';
import { HotelModule } from 'src/hotel/hotel.module';
import { HotelSchema } from 'src/hotel/Schema/hotel.schema';
import { USER_MODEL, UserSchema } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';

@Module({
  
  imports: [HotelModule,
    MongooseModule.forFeature([ { name: 'HotelRoom', schema: HotelRoomSchema }]), 
  MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),  
  
],
  providers: [HotelRoomService, HotelService,UserService],
  controllers: [HotelRoomController],
  exports: [MongooseModule,HotelRoomService]
})
export class HotelRoomModule {
  static schema: any;
}
