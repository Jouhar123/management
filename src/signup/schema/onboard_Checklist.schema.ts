import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

// Define sub-schema for hotel owner detail
@Schema()
export class HotelOwnerDetail {
  @Prop({   })
  name: string;

  @Prop({   })
  email: string;

  @Prop({   })
  mobileNumber: string;

  @Prop({   })
  panNumber: string;

  @Prop({   })
  aadharNo: string;

  @Prop({   })
  pan: string;

  @Prop({   })
  aadhar: string;
}
export const HotelOwnerDetailSchema = SchemaFactory.createForClass(HotelOwnerDetail);
export const HOTELOWNERDETAIL_MODEL=HotelOwnerDetail.name;

// Define sub-schema for hotel detail
@Schema()
export class HotelDetail {
  @Prop({   })
  hotelName: string;

  @Prop({   })
  hotelEmail: string;

  @Prop({   })
  hotelWebsite: string;

  @Prop({   })
  hotelAddress: string;

  @Prop({   })
  businessPan: string;

  @Prop({   })
  gstCertificate: string;

  @Prop({   })
  longitude: string;

  @Prop({   })
  latitude: string;

  @Prop({   })
  gpsLocation: string;

  @Prop({   })
  pincode: string;

  @Prop({   })
  city: string;

  @Prop({   })
  landmark: string;

  @Prop({   })
  totalRoom: number;
}
export const HotelDetailSchema = SchemaFactory.createForClass(HotelDetail);
export const HOTELDETAIL_MODEL=HotelDetail.name;

// Define sub-schema for room detail
@Schema()
export class RoomDetail {
  @Prop({   })
  roomNumber: string;

  @Prop({   })
  roomType: string;

  @Prop({   })
  amenities: string[];

  @Prop({   })
  price: number;
}
export const RoomDetailSchema = SchemaFactory.createForClass(RoomDetail);
export const ROOMDETAIL_MODEL=RoomDetail.name;


@Schema()
export class onboard_Checklist extends Document {
  @Prop({   })
  serialNumber: number;

  @Prop({ type: Types.ObjectId,   })
  onboardId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HOTELOWNERDETAIL_MODEL,   })
  hotelOwnerDetail: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HOTELDETAIL_MODEL,   })
  hotelDetail: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: ROOMDETAIL_MODEL,   })
  roomsDetail: Types.ObjectId[];

  @Prop({ default: false,   })
  verification: boolean;
}


export const onboard_ChecklistSchema = SchemaFactory.createForClass(onboard_Checklist);
export const ONBOARDCHECKLIST_MODEL=onboard_Checklist.name;








/*
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

// Define sub-schema for hotel owner detail
@Schema()
export class HotelOwnerDetail {
  @Prop({   })
  name: string;

  @Prop({   })
  email: string;

  @Prop({   })
  phoneNumber: string;

  @Prop({   })
  panNumber: string;

  @Prop({   })
  aadharNo: string;

  @Prop({   })
  pan: string;

  @Prop({   })
  aadhar: string;
}
export const HotelOwnerDetailSchema = SchemaFactory.createForClass(HotelOwnerDetail);
export const HOTELOWNERDETAIL_MODEL=HotelOwnerDetail.name;

// Define sub-schema for hotel detail
@Schema()
export class HotelDetail {
  @Prop({   })
  hotelName: string;

  @Prop({   })
  hotelEmail: string;

  @Prop({   })
  hotelWebsite: string;

  @Prop({   })
  hotelAddress: string;

  @Prop({   })
  businessPan: string;

  @Prop({   })
  gstCertificate: string;

  @Prop({   })
  longitude: string;

  @Prop({   })
  latitude: string;

  @Prop({   })
  gpsLocation: string;

  @Prop({   })
  pincode: string;

  @Prop({   })
  city: string;

  @Prop({   })
  landmark: string;

  @Prop({   })
  totalRoom: number;
}
export const HotelDetailSchema = SchemaFactory.createForClass(HotelDetail);
export const HOTELDETAIL_MODEL=HotelDetail.name;

// Define sub-schema for room detail
@Schema()
export class RoomDetail {
  @Prop({   })
  roomNumber: string;

  @Prop({   })
  roomType: string;

  @Prop({   })
  amenities: string[];

  @Prop({   })
  price: number;
}
export const RoomDetailSchema = SchemaFactory.createForClass(RoomDetail);
export const ROOMDETAIL_MODEL=RoomDetail.name;


@Schema()
export class onboard_Checklist extends Document {
  @Prop({   })
  serialNumber: number;

  @Prop({ type: Types.ObjectId,   })
  onboardId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HOTELOWNERDETAIL_MODEL,   })
  hotelOwnerDetail: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HOTELDETAIL_MODEL,   })
  hotelDetail: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: ROOMDETAIL_MODEL,   })
  roomsDetail: Types.ObjectId[];

  @Prop({ default: false,   })
  verification: boolean;
}


export const onboard_ChecklistSchema = SchemaFactory.createForClass(onboard_Checklist);
export const ONBOARDCHECKLIST_MODEL=onboard_Checklist.name;


*/