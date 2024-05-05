import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoomStatus } from './Schema/Roomstatus.schema';
import { CreateRoomStatusDto } from './Dto/create-Roomstatus.dto';
import { RoomStatusService } from './room-status.service';
import { UpdateRoomStatusDto } from './Dto/update-Roomstatus.dto';

@Controller('roomstatus')
export class RoomStatusController {
  constructor(private readonly roomStatusService: RoomStatusService) {}

  @Post()
  async create(@Body() createRoomStatusDto: CreateRoomStatusDto): Promise<RoomStatus> {
    return this.roomStatusService.create(createRoomStatusDto);
  }

  @Get()
  async findAll(): Promise<RoomStatus[]> {
    return this.roomStatusService.findAll();
  }

  @Get(':RoomNo')
  async findOne(@Param('RoomNo') RoomNo: number): Promise<RoomStatus> {
    return this.roomStatusService.findOne(RoomNo);
  }
  @Put('update/:RoomNo')
  async updateRoomStatus(
    @Param('RoomNo') RoomNo: number,
    @Body() updateRoomStatusDto: UpdateRoomStatusDto,
  ): Promise<RoomStatus> {
    return this.roomStatusService.updateRoomStatus(RoomNo, updateRoomStatusDto);
  }
}

  


 
