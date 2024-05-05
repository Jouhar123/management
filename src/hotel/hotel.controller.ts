import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './Schema/hotel.schema';


@Controller('hotels')

//guard used on all the controller methods
export class HotelController {
  constructor(private readonly hotelService: HotelService,
    
    // private readonly userService:UserService
    
  ) {}

  @Get('get')
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }
//------- will find Hotel by name if not found error hotel not existed--------------
  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<Hotel> {
    try {
      return await this.hotelService.findByName(name);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; 
      }
      throw new NotFoundException('Hotel not found'); // Handle other errors
    }
  }
  
//----- find hotels by id
  // @Get(':id')
  // async findById(@Param('id') id: string): Promise<Hotel> {
  //   try {
  //     return await this.hotelService.findById(id);
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw error; // Re-throw NotFoundException
  //     }
  //     throw new NotFoundException('Hotel not found'); // Handle other errors
  //   }
  // }

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelService.create(createHotelDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.hotelService.remove(id);
  }
//---------get hotel by id -----------------
  @Get('hotelid/:id')
  async findById(@Param('id') id: string): Promise<Hotel> {
    try {
      return await this.hotelService.findById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; 
      }
      throw new NotFoundException('Hotel not found'); // Handle other errors
    }
  }




  // Get('hotelid/:id'){
  //   async findById(@Param('id')id:String):Promise<Hotel>{
  //    return await this.hotelService.findById(id) ;
  //   }
  // }
}
