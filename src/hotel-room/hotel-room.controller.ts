import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { HotelRoomService } from './hotel-room.service';
import { HotelRoom, HotelRoomDocument } from './schema/HotelRoom.schema';
import { CreateHotelRoom } from './Dto/create.HotelRoom.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('hotelroom')
export class HotelRoomController {
  constructor(private readonly hotelRoomService: HotelRoomService) {}

  @Get()
  
  async findAll(): Promise<HotelRoomDocument[]> {
    return this.hotelRoomService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<HotelRoomDocument> {
    return this.hotelRoomService.findById(id);
  }

  @Post()
  async create(@Body() createHotelRoom: CreateHotelRoom): Promise<HotelRoomDocument> {
    return this.hotelRoomService.create(createHotelRoom);
  }

  // @Put('update/:id')
  // async update(@Param('id') id: string, @Body() updateHotelRoom: CreateHotelRoom): Promise<HotelRoom> {
  //   const updatedHotelRoom = await this.hotelRoomService.update(id, updateHotelRoom);
  //   if (!updatedHotelRoom) {
  //     throw new NotFoundException('Hotel room not found');
  //   }
  //   return updatedHotelRoom;
  // }
  
  @Put('update/:RoomNumber')
  async update(@Param('RoomNumber') RoomNumber: string, @Body() updateHotelRoom: CreateHotelRoom): Promise<HotelRoom> {
    const updatedHotelRoom = await this.hotelRoomService.update(RoomNumber, updateHotelRoom);
    if (!updatedHotelRoom) {
      throw new NotFoundException('Hotel room not found');
    }
    return updatedHotelRoom;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.hotelRoomService.remove(id);
  }
}