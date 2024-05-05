import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guest, GuestDocument } from './schema/guest.schema';
import { CreateGuestDto } from './Dto/create.Guest.dto';

import { UserService } from 'src/user/user.service';


@Injectable()
export class GuestService {
  constructor(
    @InjectModel(Guest.name) private readonly guestModel: Model<GuestDocument>,
    //@InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
    private readonly userService: UserService
  ) { }

  async create(createguestDto: CreateGuestDto) {
    // const user = await this.userService.findById(createguestDto.userid);
    const user = await this.userService.findByEmail(createguestDto.useremail);

    if (!user) {
      throw new NotFoundException("the user is not existed ");
    }
    else {
    //   const existingGuest = await this.guestModel.findOne({ id : createguestDto.id});
    const existingGuest = await this.guestModel.findOne({ email: createguestDto.email });
      if (existingGuest) {
        throw new ForbiddenException("The guest is already registered.");
      }
  
    // } else if (user.role !== Role.ADMIN && user.role !== Role.STAFF) {
    //   throw new ForbiddenException("Only employer can make registration");
    // }
    return this.guestModel.create({
      ...createguestDto,
      //------ to get employee id in database------
      //employee: user._id,
      // ----- to get employee email in database------
      employee: user.Email,

      // employer: createguestDto.email, 
   });

}
  }
// ------ find all-------
  async findAll(): Promise<Guest[]> {
    return this.guestModel.find().exec();
  }
//------ find one by id------
  async findOne(id: string): Promise<Guest> {
    return this.guestModel.findById(id).populate("employee").exec();
  }
  //------------find by id and update---------------

  async update(id: string, updateGuestDto: CreateGuestDto): Promise<Guest> {
    return this.guestModel.findByIdAndUpdate(id, updateGuestDto, { new: true }).exec();
  }
//-------  find by id and update ----------------
  async remove(id: string): Promise<Guest> {
    return this.guestModel.findByIdAndDelete(id).exec();
  }
}
