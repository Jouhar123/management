import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {USER_MODEL, User} from 'src/user/schema/user.schema';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Hotel extends Document {

  // @Prop({type:Types.ObjectId, ref:USER_MODEL, required:true})
  // employee:Types.ObjectId|User;

  @Prop({ type: String, unique: true, required: true, uppercase: true })
  name: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  landmark: string;

  @Prop({ type: Boolean, default: false })
  onboard: boolean;
}

export type HotelDocument = Hotel & Document;
export const HotelSchema = SchemaFactory.createForClass(Hotel);

export const HOTEL_MODEL=Hotel.name;
