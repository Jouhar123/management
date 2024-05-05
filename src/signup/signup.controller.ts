import { Controller, Post, Body, Param, Get, Query, UseInterceptors, ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';
import { SignupService } from './signup.service';
import { HotelDetail, HotelOwnerDetail, onboard_Checklist, RoomDetail } from './schema/onboard_Checklist.schema';


@Controller('signup')
export class SignupController {

  constructor(private readonly signupService: SignupService) {}

  
  @Post('create')
  async createPreboarding(
    @Body() data: { hotelOwner: HotelOwnerDetail, hotelDetail: HotelDetail, roomDetail: RoomDetail[] }
  ) {
    try {
      const { hotelOwner, hotelDetail, roomDetail } = data;
      
      // Create hotel owner, hotel detail, rooms detail, and preboarding
      const onboard = await this.signupService.createOwnerAndPreonboard(hotelOwner, hotelDetail, roomDetail);
      
      return {
        success: true,
        onboard
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

 
}
