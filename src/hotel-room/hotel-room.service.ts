import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { HotelRoom, HotelRoomDocument } from './schema/HotelRoom.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HotelService } from 'src/hotel/hotel.service';
import { CreateHotelRoom } from './Dto/create.HotelRoom.dto';
import { populate } from 'dotenv';

@Injectable()
export class HotelRoomService {
  constructor(@InjectModel(HotelRoom.name) private readonly hotelRoomModel: Model<HotelRoomDocument>,
    private readonly hotelService: HotelService
  ) { }

  // --------- create database only if room number is not exist in thse same hotel -------
  async create(createHotelRoom: CreateHotelRoom) {
    const hotel = await this.hotelService.findByName(createHotelRoom.hotel_name);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    const existingRoom = await this.hotelRoomModel.findOne({
      branch: hotel.name,
      RoomNumber: createHotelRoom.RoomNumber
    }).exec();
    if (existingRoom) {
      throw new ForbiddenException('Room already exists in this hotel');
    }
    return this.hotelRoomModel.create({
      ...createHotelRoom,
      branch: hotel.name
    });
  }

  //  async create(createHotelRoom: CreateHotelRoom){
  //   const hotel = await this.hotelService.findByName(createHotelRoom.hotel_name);
  //   if(!hotel){
  //     throw new NotFoundException('Hotel not found');
  //   }
  //   return this.hotelRoomModel.create({
  //     ...createHotelRoom,
  //     branch:hotel.name
  //   })
  //  }

  async findAll(): Promise<HotelRoomDocument[]> {
    return this.hotelRoomModel.find().exec();
  }

  async findById(id: string): Promise<HotelRoomDocument> {
    const hotelRoom = await this.hotelRoomModel.findById(id).exec();
    if (!hotelRoom) {
      throw new NotFoundException('Hotel room not found');
    }
    return hotelRoom;
  }

  async update(id: string, updateHotelRoom: CreateHotelRoom): Promise<HotelRoom> {
    return this.hotelRoomModel.findByIdAndUpdate(id, updateHotelRoom, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.hotelRoomModel.findByIdAndDelete(id).exec();
  }

  async findByRoom(RoomNumber: string): Promise<HotelRoomDocument> {
    const hotelRoom = await this.hotelRoomModel.findOne({ RoomNumber }).exec();
    if (!hotelRoom) {
      throw new NotFoundException('Hotel room not found');
    }
    return hotelRoom;
  }
  // async findHotelRoomsWithRoomStatus(roomNumber: number): Promise<HotelRoomDocument[]> {
  //   // Query HotelRoom documents and populate all fields from RoomStatus collection based on room number
  //   return this.hotelRoomModel.find({ RoomNumber: roomNumber }).populate('roomStatus').exec();
  // }
  // async findHotelRoomsWithRoomStatus(): Promise<HotelRoom[]> {
  //   const hotelRoomsWithStatus = await this.hotelRoomModel.find().populate('stat').exec();
    
  //   const hotelRoomsWithAvailableStatus = hotelRoomsWithStatus.map(hotelRoom => {
  //     const roomStatus = hotelRoom.stat;
  //     const available = roomStatus ? roomStatus.Available : false;
  //     return {
  //       ...hotelRoom.toObject(),
  //       Available: available
  //     };
  //   });

  //   return hotelRoomsWithAvailableStatus;
  // }
}








