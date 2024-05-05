import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { HotelRoomService } from 'src/hotel-room/hotel-room.service';
import { HotelRoom } from 'src/hotel-room/schema/HotelRoom.schema';
import { Hotel } from 'src/hotel/Schema/hotel.schema';
import { HotelService } from 'src/hotel/hotel.service';
import { LoginDto } from 'src/user/Dto/login.dto';

import { User } from 'src/user/schema/user.schema';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    // @InjectModel(HotelRoom.name) private hotelRoomModel: Model<HotelRoom>,
  
    private jwtService: JwtService,


  ) { }

  //login dto
  async login(loginDto: LoginDto): Promise<string> {
    const { Name, Email, Password, Hotel_Name } = loginDto;
    const user = await this.userModel.findOne({ Email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.Name !== Name || user.Branch !== Hotel_Name) {
      throw new UnauthorizedException('Hotel or user name not matched');
    }

    const isPasswordValid = await compare(Password, user.Password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.jwtService.sign({ userId: user._id });
  }

 


  async signup(signupData: any): Promise<void> {
    const { name, email, hotelName, Role, Password, hotelAadress, landmark } = signupData;
    
    // Check if the user exists
    const existingUser = await this.userModel.findOne({ Name: name, Email: email }).exec();
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
  
    // Check if the hotel exists
    let hotel;
    let createdHotel;
    if (hotelName) {
      hotel = await this.hotelModel.findOne({ name: hotelName }).exec();
      if (hotel) {
        throw new ConflictException('Hotel already exists');
      }
      // Create the hotel
      const newHotel = new this.hotelModel({
        name: hotelName,
        address: hotelAadress,
        landmark: landmark,
        // Include other hotel details here
      });
      createdHotel = await newHotel.save();
      // If hotel is created, throw message
      if (createdHotel) {
        console.log('Hotel created successfully');
      }
    }
  
    // Create the user
    const newUser = new this.userModel({
      Name: name,
      Email: email,
      Password: Password,
      Role: Role,
      Branch: createdHotel ? createdHotel._id : null, // Assign the hotel ID to the user if hotel is created
      // Include other user details here
    });
    await newUser.save(); // Save the new user to the database
    // If user is created, throw message
    console.log('User created successfully');
  }
}
 // async signup(signupData: any): Promise<void> {
  //   // const { name, email, hotelName, Mobilenumber, pannumber, aadharNo, hotelEmail, hotelWebsite, longatitute, letitute, gpsLocation, hotelAadress, panPhoto, aadharPhoto, gstCertificate, pincode, state, city, landmark, businessPan, totalroom, rooms } = signupData;
  //   const { name, email, hotelName,Role,Password ,hotelAadress, landmark,Roomnumber,roomType,amenities,Is_Act} = signupData;
  //   // Check if the user exists
  //   const existingUser = await this.userModel.findOne({ Name: name, Email: email }).exec();
  //   if (existingUser) {
  //     throw new ConflictException('User already exists');
  //   }

  //   // Check if the hotel exists
  //   const existingHotel = await this.hotelModel.findOne({ name: hotelName }).exec();
  //   if (existingHotel) {
  //     throw new ConflictException('Hotel already exists');
  //   }

  //   // Create the hotel
  //   const newHotel = new this.hotelModel({
  //     name: hotelName,
  //     address: hotelAadress,
  //     landmark: landmark,
  //     // Include other hotel details here
  //   });
  //   const createdHotel = await newHotel.save();

  //   // Create the user
  //   const newUser = new this.userModel({
  //     Name: name,
  //     Email: email,
  //     Password: Password,
  //     Role: Role,
  //     Branch: createdHotel._id, // Assign the hotel ID to the user
  //     // Include other user details here
  //   });
  //   await newUser.save();
  
    // const newRoom = new this.hotelRoomModel({
    //   branch: createdHotel._id, // Assigning the hotel ID to the room
    //   RoomNumber: Roomnumber, // Corrected variable name
    //   roomType: roomType,
    //   amenities: amenities,
    //   Is_Act: Is_Act, // Assuming the room is active by default
    // });
    // await newRoom.save();
  






  