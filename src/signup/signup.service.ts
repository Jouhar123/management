import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { HotelDetail, HotelOwnerDetail, onboard_Checklist, RoomDetail } from './schema/onboard_Checklist.schema';


@Injectable()
export class SignupService {
  constructor(
    @InjectModel(HotelDetail.name) private readonly hotelDetailModel: Model<HotelDetail>,
    @InjectModel(HotelOwnerDetail.name) private readonly hotelOwnerDetailModel: Model<HotelOwnerDetail>,
    @InjectModel(RoomDetail.name) private readonly roomDetailModel: Model<RoomDetail>,
    @InjectModel(onboard_Checklist.name) private readonly hotelPreboardingModel: Model<onboard_Checklist>
  ) {}

  async createOwnerAndPreonboard(hotelOwnerDetail: HotelOwnerDetail, hotelDetail: HotelDetail, roomDetails: RoomDetail[]): Promise<onboard_Checklist> {
    // Create owner
    const owner = await this.hotelOwnerDetailModel.create(hotelOwnerDetail);
  
    // Create hotel
    const hotel = await this.hotelDetailModel.create(hotelDetail);
  
    // Create rooms
    const rooms = await this.roomDetailModel.create(roomDetails);
  
    // Create preboarding
    const onboard = {
      serialNumber: 1, // Assuming this is constant or derived from somewhere
      onboardId: new Types.ObjectId(), // Generate a new ObjectId
      hotelId: hotel._id,
      hotelOwnerDetail: owner._id,
      hotelDetail: hotel._id,
      roomsDetail: rooms.map(room => room._id),
      verification: false // Assuming this is a default value
    };
  
    return await this.hotelPreboardingModel.create(onboard);
  }
  
  async removePreonboard(serialNumber: number): Promise<void> {
    await this.hotelPreboardingModel.deleteOne({ serialNumber });
    const preboards = await this.hotelPreboardingModel.find().sort({ serialNumber: 1 });
    for (let i = 0; i < preboards.length; i++) {
      const preboard = preboards[i];
      if (preboard.serialNumber !== i + 1) {
        preboard.serialNumber = i + 1;
        await preboard.save();
      }
    }
  }
}










/*
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { HotelDetail, HotelOwnerDetail, HotelPreboarding, RoomDetail } from './schema/preonboard.schema';



@Injectable()
export class SignupService {
  constructor(
    @InjectModel(HotelDetail.name) private readonly hotelDetailModel: Model<HotelDetail>,
    @InjectModel(HotelOwnerDetail.name) private readonly hotelOwnerDetailModel: Model<HotelOwnerDetail>,
    @InjectModel(RoomDetail.name) private readonly roomDetailModel: Model<RoomDetail>,
    @InjectModel(HotelPreboarding.name) private readonly hotelPreboardingModel: Model<HotelPreboarding>
  ) {}
  async createOwnerAndPreonboard(hotelOwnerDetail: HotelOwnerDetail, hotelDetail: HotelDetail, roomDetails: RoomDetail[]): Promise<HotelPreboarding> {
  // Create owner
  const owner = await this.hotelOwnerDetailModel.create(hotelOwnerDetail);

  // Create hotel
  const hotel = await this.hotelDetailModel.create(hotelDetail);

  // Create rooms
  const rooms = await this.roomDetailModel.create(roomDetails);

  // Create preboarding
  const preonboardData = {
    serialNumber: 1, // Assuming this is constant or derived from somewhere
    onboardId: new Types.ObjectId(), // Generate a new ObjectId
    hotelId: hotel._id,
    hotelOwnerDetail: owner._id,
    hotelDetail: hotel._id,
    roomsDetail: rooms.map(room => room._id),
    verification: false // Assuming this is a default value
  };

  return await this.hotelPreboardingModel.create(preonboardData);
}

}
*/
  
  



