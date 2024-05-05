import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsUUID } from "class-validator";
import { ObjectId } from "mongoose";

@Schema({
    timestamps:true
})
export class Upload{


    @Prop({type:IsUUID})
    id:string;
    @Prop()
    name: string;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
