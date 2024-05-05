import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Document, Types } from 'mongoose';
import { HotelRoom } from 'src/hotel-room/schema/HotelRoom.schema';

@Schema({ timestamps: true })
export class RoomStatus extends Document {

  @Prop({type:Types.ObjectId,ref:"HotelRoom"})
  Amns:Types.ObjectId | HotelRoom;

  @Prop({ unique: true })
  RoomNo: number;

  // @Prop({ unique: true })
  // RoomNo: number;  

  @Prop({type:Boolean})
  Available: Boolean;

}

export type RoomStatusDocument = RoomStatus & Document;

export const RoomStatusSchema = SchemaFactory.createForClass(RoomStatus);
