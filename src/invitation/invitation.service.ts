import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invitation, InvitationDocument } from './schema/Invite.schema';
import { CreateInvitationDto } from './Dto/create-invite.dto';
import { NotFoundError } from 'rxjs';


@Injectable()
export class InvitationService {
  constructor(@InjectModel(Invitation.name) private readonly invitationModel: Model<InvitationDocument>) {}

  async create(createInvitationDto: CreateInvitationDto): Promise<InvitationDocument> {
    const createdInvitation = new this.invitationModel(createInvitationDto);
    return createdInvitation.save();
  }

  async findAll(): Promise<Invitation[]> {
    return this.invitationModel.find().exec();
  }

  async findOne(id: string): Promise<Invitation> {
    return this.invitationModel.findById(id).exec();
  }

  async update(id: string, updateInvitationDto: CreateInvitationDto): Promise<Invitation> {
    return this.invitationModel.findByIdAndUpdate(id, updateInvitationDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.invitationModel.findByIdAndDelete(id).exec();
  }

  async findByEmail(email: string): Promise<InvitationDocument | null> {
    const invitation = await this.invitationModel.findOne({ Recipent: email }).exec();
    if (!invitation) {
      throw new NotFoundException('Invitation not found');
    }
    return invitation;
  }
}