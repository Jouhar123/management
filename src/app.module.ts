import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitationModule } from './invitation/invitation.module';
import { GuestModule } from './guest/guest.module';
import { MailModule } from './mailer/mailer.module';
import { HotelModule } from './hotel/hotel.module';
import { HotelRoomModule } from './hotel-room/hotel-room.module';
import { RoomStatusModule } from './room-status/room-status.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { SignupModule } from './signup/signup.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    InvitationModule,
    MailModule,
    GuestModule,
    HotelModule,
    HotelRoomModule,
    RoomStatusModule,
    AuthModule,
    UploadModule,
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
