import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Signup extends Document {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    hotelName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    panNumber: string;

    @Prop()
    aadharNo: string;

    @Prop()
    pan: string;// will upload pan card

    @Prop()
    aadhar: string;//will upload aadhar documnet

    @Prop()
    password:string;

    @Prop()
    hotelEmail: string;

    @Prop()
    hotelWebsite: string;

    @Prop()
    longitude: string;

    @Prop()
    latitude: string;

    @Prop()
    gpsLocation: string;

    @Prop()
    hotelAddress: string;

    @Prop()
    BusinessPan:string;//will upload business pan card

    @Prop()
    gstCertificate: string;// will upload gst certificate

    @Prop()
    pincode: string;

    @Prop()
    state: string;

    @Prop()
    city: string;

    @Prop()
    landmark: string;    

    @Prop()
    totalRoom: string;

    @Prop({
        type: [{
            roomNumber: String,
            roomType: String,
            amenities: [String],
            price:String
        }]
    })
    rooms: {
        roomNumber: string;
        roomType: string;
        amenities: string[];
        price:string;
    }[];
}
export type SignupDocument = Signup & Document;
export const SignupSchema = SchemaFactory.createForClass(Signup)
export const SIGNUP_MODEL=Signup.name
