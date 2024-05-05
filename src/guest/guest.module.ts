import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { GuestSchema } from './schema/guest.schema';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from 'src/user/user.service';
import { UserSchema } from 'src/user/schema/user.schema';
import { UserModule } from 'src/user/user.module';
import { HotelService } from 'src/hotel/hotel.service';
import { HotelModule } from 'src/hotel/hotel.module';


@Module({
  imports:[MongooseModule.forFeature([{name:'Guest',schema:GuestSchema}]),
  MongooseModule.forFeature([{name:'User',schema:UserSchema}]),
  UserModule,HotelModule
],
  controllers: [GuestController],
  providers: [GuestService,UserService,HotelService],
  exports:[MongooseModule]

})
export class GuestModule {}
