import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { UpdateUserDto } from './Dto/update-user.dto';
import { HotelService } from 'src/hotel/hotel.service';
import { hash } from 'bcrypt';


@Injectable()
export class UserService {
     
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly hotelservice:HotelService

    )
  {}
 
  //------------craete user using populate hotel id ----------------------
  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const { Branch, ...userDto } = createUserDto; // Destructure branch_id from createsUserDto
    const hotel = await this.hotelservice.findById(Branch);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    const hashedPassword = await hash(userDto.Password, 10);
    const createdUser = new this.userModel({ ...userDto,  Branch: hotel.id,Password: hashedPassword });
    // const createdUser = new this.userModel({ ...userDto,  Branch: { id: hotel.id, name: hotel.name },Password: hashedPassword });
    return createdUser.save();
  }

//  async create(createUserDto:CreateUserDto){
//   const hotel=await this.hotelservice.findById(createUserDto.branch_id);
//   if(!hotel){
//     throw new NotFoundException('Hotel not found'); 
//   }
//   const us=await this.userModel.create({...createUserDto,branch:branch_id});
//   return us;
//  }

//  ------------find by email -----------------
  async findByEmail(Email:string):Promise<UserDocument>{
    return (await this.userModel.findOne({Email}));
  }
  //------------findbyid and update-----------------------
 
  async findByIdAndUpdate(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto); 
    const updatedUser = await user.save();
    return updatedUser;
  
  }
  async findByUsername(username: string): Promise<UserDocument> {
    return this.userModel.findOne({ Name: username }).exec();
  }

 
  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ Nameame: username }).exec();
  }
  async findById(id:string):Promise<UserDocument>{
    return this.userModel.findById(id).exec()
  }
  async findAll():Promise<UserDocument[]> {
    return this.userModel.find().populate("Branch");
  }


}


















// ----------------- create user -----------------
//   async create(createUserDto: CreateUserDto): Promise<User> {
//     const createdUser = new this.userModel(createUserDto);
//     return createdUser.save();
//   }

// //------------find by id ------------------
// async findById(id: string): Promise<UserDocument> {
//   const user = await this.userModel.findById(id).exec();
//   // if (!user) {
//   //   throw new NotFoundException('User not found');
//   // }
//   return user;
// }



 // async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
  //   // Check if a user with the provided name and email already exists
  //   const existingUser = await this.userModel.findOne({
  //     name: createUserDto.name,
  //     email: createUserDto.email,
  //   }).exec();

  //   if (existingUser) {
  //     throw new Error('User already exists');
  //   }

  //   // Check if the hotel exists and is onboard
  //   const hotel = await this.hotelservice.findByName(createUserDto.Hotel_emp);

  //   if (!hotel || !hotel.onboard) {
  //     throw new NotFoundException('Hotel not found or not onboard');
  //   }

  //   // Create the user
  //   const newUser = new this.userModel(createUserDto);
  //   return newUser.save();
  // }