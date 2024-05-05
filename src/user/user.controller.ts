import { Controller, Get, Post, Body, Param, Put, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User, UserDocument } from './schema/user.schema';
import { UpdateUserDto } from './Dto/update-user.dto';
import { LoginDto } from './Dto/login.dto';
import { Public } from 'src/auth/meta';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService,
) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.userService.create(createUserDto);
  }
  @Public()
  @Get()
  async findAll(): Promise<UserDocument[]> {
    return this.userService.findAll();
  }
  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserDocument> {
    return (await this.userService.findByEmail(email));
  
}
@Put(':id')
async updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserDocument> {
  try {
    const updatedUser = await this.userService.findByIdAndUpdate(id, updateUserDto);
    return updatedUser;
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw new NotFoundException(error.message);
    }
    throw error;

}
}
@Get('id/:id')
  async findById(@Param('id') id: string): Promise<UserDocument> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  
  @Get('name/:username')
  async findByUsername(@Param('username') username: string): Promise<UserDocument> {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

}
