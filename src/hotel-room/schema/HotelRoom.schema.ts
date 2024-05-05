import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose'; // Import Types from mongoose

@Schema({ timestamps: true })
export class HotelRoom {

    @Prop({ type: Types.ObjectId, ref: 'Hotel' }) 
    branch: Types.ObjectId; 

    @Prop({ type: Types.ObjectId, ref: 'RoomStatus' }) 
    stat: Types.ObjectId; 

    @Prop({required:true })
    RoomNumber: number;
    @Prop({ required: true })
    roomType: string;
    @Prop({ type: [String], default: [] })
    amenities: string[];
    @Prop({ required: true })
    Is_Act: boolean;
    


}
//
export type HotelRoomDocument = HotelRoom & Document;

export const HotelRoomSchema = SchemaFactory.createForClass(HotelRoom);

