import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';

import { GuestService } from './guest.service';
import { CreateGuestDto } from './Dto/create.Guest.dto';
import { Guest } from './schema/guest.schema';


@Controller('guests')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  async create(@Body() createGuestDto: CreateGuestDto): Promise<Guest> {
    return this.guestService.create(createGuestDto);
  }


  @Get('allguests')
  async findAll(): Promise<Guest[]> {
    return this.guestService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Guest> {
    const guest = await this.guestService.findOne(id);
    if (!guest) {
      throw new NotFoundException('Guest not found');
    }
    return guest;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGuestDto: CreateGuestDto): Promise<Guest> {
    return this.guestService.update(id, updateGuestDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Guest> {
    return this.guestService.remove(id);
  }
}
