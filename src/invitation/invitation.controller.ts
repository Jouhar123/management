import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { CreateInvitationDto } from './Dto/create-invite.dto';
import { Invitation, InvitationDocument } from './schema/Invite.schema';


@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Post()
  async create(@Body() createInvitationDto: CreateInvitationDto): Promise<InvitationDocument> {
    return this.invitationService.create(createInvitationDto);
  }

  @Get()
  async findAll(): Promise<Invitation[]> {
    return this.invitationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Invitation> {
    return this.invitationService.findOne(id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<InvitationDocument> {
    try {
      const invitation = await this.invitationService.findByEmail(email);
      return invitation;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
}

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateInvitationDto: CreateInvitationDto): Promise<Invitation> {
    return this.invitationService.update(id, updateInvitationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.invitationService.remove(id);
  }
}
