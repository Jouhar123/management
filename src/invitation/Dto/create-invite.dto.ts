import { IsNotEmpty, IsEnum, IsString, IsEmail, IsUppercase } from 'class-validator';
import { InvitationStatus } from '../schema/Invite.schema';



export class CreateInvitationDto {
  @IsNotEmpty()
  @IsEmail()
  InvitedBy: string;

  @IsNotEmpty()
  @IsEmail()
  Reciever: string;

  @IsEnum(InvitationStatus)
  invitationStatus: InvitationStatus;
}
