import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator"
import { InvitationStatus } from "../schema/Invite.schema"




export class UpdateCreateInvitationDto{
  @IsOptional()
  @IsEmail()
  InvitedBy: string;

  @IsOptional()
  @IsEmail()
  Recipent: string;

  @IsEnum(InvitationStatus)
  invitationStatus: InvitationStatus;
}
