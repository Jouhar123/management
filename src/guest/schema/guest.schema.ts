// guest.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

@Schema({ timestamps: true })
export class Guest extends Document {

  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Reference to User schema
  // user: Types.ObjectId;
  employee: Types.ObjectId | User;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  phone: number;

  @Prop([String])
  roomNumber: string[];

  // @Prop()
  // aadhaar: number;

  // @Prop()
  // address: string;

  @Prop()
  numberOfGuests: string;

  @Prop({
    type: [{
        AadharNumber: String,
        Aadhar: String,
        price:String,
        givenPrice:String,
    }]
})
rooms: {
    AadharNumber: string;
    Aadhar: string;
    price: string;
    givenPrice:string;
}[];


  }
export type GuestDocument = Guest & Document;

export const GuestSchema = SchemaFactory.createForClass(Guest);

function populateMiddleware(next:Function){
  this.populate({path:"employee",select:{name:1}});
}
GuestSchema.pre("find",populateMiddleware);
GuestSchema.pre("findOne",populateMiddleware);