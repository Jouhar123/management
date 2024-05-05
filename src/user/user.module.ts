import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL, UserSchema } from './schema/user.schema';
import { HotelService } from 'src/hotel/hotel.service';
import { HOTEL_MODEL, HotelSchema } from 'src/hotel/Schema/hotel.schema';



@Module({
  imports:[MongooseModule.forFeature([{name:USER_MODEL,schema:UserSchema}]),
  MongooseModule.forFeature([{name:HOTEL_MODEL,schema:HotelSchema}])],

  providers: [UserService,HotelService],
  controllers: [UserController],
  exports:[MongooseModule],
})
export class UserModule {}
