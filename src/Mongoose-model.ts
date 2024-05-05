//-------------------------------      CREATING THIS FILE SO THAT CAN IMPORT MODULES FROM HERE WITH EASE----------------
/*
import { Global, Module } from "@nestjs/common";
import { HotelSchema } from "./hotel/Schema/hotel.schema";
import { HotelRoomSchema } from "./hotel-room/schema/HotelRoom.schema";
import { MongooseModule } from "@nestjs/mongoose";

const MODELS=[

    {name:'Hotel', schema:HotelSchema},
    {name:'HotelRoom', schema:HotelRoomSchema},

];

@Global()
@Module({
    imports:[MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule],
})
export class MongooseModelModule {}

// now just add (MongooseModelModule) in app module and we can use there models anyware no needs for declaration

*/