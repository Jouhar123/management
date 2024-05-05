import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { HotelService } from 'src/hotel/hotel.service';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL } from 'src/user/schema/user.schema';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
// import { AuthGuard } from './auth.guards';
import { HotelModule } from 'src/hotel/hotel.module';
import { HotelRoomModule } from 'src/hotel-room/hotel-room.module';

@Module({
  imports: [   
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string | number>('JWT_EXPIRE'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    UserService,
    HotelService,
    HotelService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard, 
    // },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
