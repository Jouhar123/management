import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { ObjectId } from 'bson';
import { Document, Types } from 'mongoose';
import { HOTEL_MODEL, Hotel } from 'src/hotel/Schema/hotel.schema';



export enum Role {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
}

@Schema({ timestamps: true,
 })
export class User extends Document {

  @Prop({ type: Types.ObjectId, ref: HOTEL_MODEL, required: true }) // Reference to User schema
  Branch: Types.ObjectId | string;

  // // @Prop({type:Types.ObjectId})
  // // userId:ObjectId ;

  @Prop({ required: true })
  Name: string;

  @Prop({unique:true, required: true })
  Email: string;

  @Prop({ enum: Role, required: true }) 
  Role: Role;

  @Prop({ required: true })
  Password: string;



   
}

export type UserDocument = User & Document; 
export const UserSchema = SchemaFactory.createForClass(User);
export const USER_MODEL=User.name;







// function populateMiddleware(next: Function) {
//   this.populate({ path: "employee", select: { name: 1, email: 1 } });  // NOTE: we can also use `_id: 0` to unselect the `id` { name: 1, email: 1, _id: 0 }
//   next();
// }

// UserSchema.pre("find", populateMiddleware);

// UserSchema.pre("findOne", populateMiddleware);
