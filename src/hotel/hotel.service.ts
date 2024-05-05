import { ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { HOTEL_MODEL, Hotel, HotelDocument } from "./Schema/hotel.schema";
import { Model } from "mongoose";
import { CreateHotelDto } from "./dto/create-hotel.dto";
import { UserService } from "src/user/user.service";

import { Role} from "src/user/schema/user.schema";
import { HotelModule } from "./hotel.module";


@Injectable()
export class HotelService {
 
  
  
  constructor(@InjectModel(HOTEL_MODEL) private readonly hotelModel: Model<HotelDocument>,
  // private readonly userService:UserService
) {}

// async create(createhoteldto:CreateHotelDto){
// const user=await this.userService.findById(createhoteldto.userId)
// if(!user){
//   throw new NotFoundException('User not found')
// }
// if(user.role !== Role.ADMIN){
//   throw new ForbiddenException("You are not ADMIN");
// }
// const existingHotel = await this.hotelModel.findOne({ hotel_id: createhoteldto.hotelId }).exec();
//     if (existingHotel) {
//       throw new ConflictException('Hotel with the provided ID already exists');
//     }

// const hotel=await this.hotelModel.create({...createhoteldto,employee:user._id});
// return hotel
// }

create(createHotelDto: CreateHotelDto): Hotel | PromiseLike<HotelDocument> {
  return this.hotelModel.create(createHotelDto);
  
}



  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }
  //------ service logic to find element by name --------
  async findByName(name: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findOne({ name }).exec();
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }

//------- service logic by id ----------------
  // async findById(id: string): Promise<Hotel> {
  //   const hotel = await this.hotelModel.findById(id).exec();
  //   if (!hotel) {
  //     throw new NotFoundException('Hotel not found');
  //   }
  //   return hotel;

  // async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
  //   const createdHotel = new this.hotelModel(createHotelDto);
  //   return createdHotel.save();
  // }

  //------ service logic to create Hotels first check if existed if not existed then create hotel else hotel existed --------
  // async create(createHotelDto: CreateHotelDto): Promise<HotelDocument> {
  //   const existingHotel = await this.hotelModel.findOne({ name: createHotelDto.name }).exec();
  //   if (existingHotel) {
  //     throw new ConflictException('Hotel already exists');
  //   }
  //   const createdHotel = new this.hotelModel(createHotelDto);
  //   return createdHotel.save();
  // }


//---------------CHECKING HOTEL IF EXIST AND IF NOT EXIST THEN CHECKING USER IF NOT EXIST THEN USER ABOTHER USER -----------
  // async create(createHotelDto: CreateHotelDto): Promise<HotelDocument> {
  //   const existingHotel = await this.hotelModel.findOne({ name: createHotelDto.name }).exec();
  //   if (existingHotel) {
  //     throw new ConflictException('Hotel already exists');
  //   }
  //   const user = await this.userService.findByUsername(createHotelDto.username);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   const createdHotel = new this.hotelModel(createHotelDto);
  //   return createdHotel.save();
  // }
  


  //-----------finding hotel by hotel_id--------------

  async findById(id: string): Promise<Hotel | null> {
    try {
      const hotel: Hotel | null = await this.hotelModel.findById(id).exec();
      return hotel;
    } catch (error) {
      console.error('Error finding hotel by ID:', error);
      throw error;
    }
  }

//-------- find by id and update---------
  async update(id: string, updateHotelDto: CreateHotelDto): Promise<HotelDocument> {
    return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true }).exec();
  }

  //----------find by id and delete--------------

  async remove(id: string): Promise<void> {
    await this.hotelModel.findByIdAndDelete(id).exec();
  }
  // async findById(id:string):Promise<HotelDocument>{
  //   return this.hotelModel.findById(id).exec();
  // }

  }




//   async findByNameAndPassword(hotelName: string, password: string) {
//     // Assuming you have a method to find a hotel by name and password in your database
//     const hotel = await this.hotelModel.findOne({ name: hotelName, password }).exec();
    
//     if (!hotel) {
//       // Hotel not found or password incorrect
//       throw new NotFoundException('Hotel not found or password incorrect');
//     }
  
//     // Hotel found, you can return it or perform any additional logic here
//     return hotel;
//   }
  



// }
