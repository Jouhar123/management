import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomStatus, RoomStatusDocument } from './Schema/Roomstatus.schema';
import { CreateRoomStatusDto } from './Dto/create-Roomstatus.dto';
import { UpdateRoomStatusDto } from './Dto/update-Roomstatus.dto';
import { HotelRoomService } from 'src/hotel-room/hotel-room.service';


@Injectable()
export class RoomStatusService {
  createroomstatus: any;
  constructor(
    @InjectModel(RoomStatus.name) private roomStatusModel: Model<RoomStatusDocument>,
    private readonly hotelroomsService: HotelRoomService
  ) {}

  async  create(createroomstatus:CreateRoomStatusDto){
    const room=await this.hotelroomsService.findByRoom(createroomstatus.Room);
    if(!room){
      throw new NotFoundException('Room not found');
    }

    return this.roomStatusModel.create({
      ...this.createroomstatus,
      
    })
  }

  // async create(createRoomStatusDto: CreateRoomStatusDto): Promise<RoomStatus> {
  //   const createdRoomStatus = new this.roomStatusModel(createRoomStatusDto);
  //   return createdRoomStatus.save();
  // }

  async findAll(): Promise<RoomStatusDocument[]> {
    return this.roomStatusModel.find().exec();
  }

  async findOne(RoomNo: number): Promise<RoomStatusDocument> {
    return this.roomStatusModel.findOne({ RoomNo }).exec();
  }



  // async updateRoomStatus(roomNo: number, updateRoomStatusDto: UpdateRoomStatusDto): Promise<RoomStatus> {
  //   const roomStatus = await this.findRoomStatusByRoomNo(roomNo);
  //   if (updateRoomStatusDto.RoomNo && updateRoomStatusDto.RoomNo !== roomNo) {
  //     throw new BadRequestException('Room number cannot be changed');
  //   }
  //   roomStatus.Available = updateRoomStatusDto.Available;
  //   return roomStatus.save();
  // }
   async findRoomStatusByRoomNo(RoomNo: number): Promise<RoomStatusDocument> {
    const roomStatus = await this.roomStatusModel.findOne({ RoomNo: RoomNo }).exec();
    if (!roomStatus) {
      throw new NotFoundException('Room status not found');
    }
    return roomStatus;
  }

  async updateRoomStatus(RoomNo: number, updateRoomStatusDto: UpdateRoomStatusDto): Promise<RoomStatusDocument> {
   // Ensure the room number in the DTO matches the room number in the parameter
    // if (updateRoomStatusDto.RoomNo !== RoomNo) {
    //     throw new BadRequestException('Room number cannot be changed');
    // }

    const roomStatus = await this.roomStatusModel.findOne({ RoomNo: RoomNo }).exec();
    if (!roomStatus) {
        throw new NotFoundException('Room status not found');
    }
    roomStatus.Available = updateRoomStatusDto.Available;
    return roomStatus.save();
}

}

  
