import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { HotelDetail, HotelDetailSchema, HotelOwnerDetail, HotelOwnerDetailSchema,onboard_Checklist , onboard_ChecklistSchema, RoomDetail, RoomDetailSchema } from './schema/onboard_Checklist.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest:'./file',
    }),

    MongooseModule.forFeature([
      { name: HotelOwnerDetail.name, schema: HotelOwnerDetailSchema },
      { name: HotelDetail.name, schema: HotelDetailSchema },
      { name: RoomDetail.name, schema: RoomDetailSchema },
      { name: onboard_Checklist.name, schema: onboard_ChecklistSchema },
    ])
  ],
  providers: [SignupService],
  controllers: [SignupController],
  exports:[MongooseModule,SignupService]
})
export class SignupModule {}

