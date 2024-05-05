import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



export enum InvitationStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED'
}

@Schema({ timestamps:{ createdAt: 'send', updatedAt: 'updatedAt' }})
export class Invitation  {
 
  @Prop({ required: true })
  InvitedBy: string;

  @Prop({ required: true })
  Recipent: string;

  @Prop({ default: InvitationStatus.PENDING, enum: InvitationStatus,uppercase:true })
  invitationStatus: string;

  @Prop({ default: Date.now })
  send: Date;
}
export const InvitationSchema = SchemaFactory.createForClass(Invitation);

export type InvitationDocument = Invitation & Document;