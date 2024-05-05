import { IsNotEmpty } from "class-validator";

export class CreateSignupDto {
  ////
       name: string;
    ////   
       email: string;
    ////   
       hotelName: string;
    ////   
       phoneNumber: string;
    ////   
       panNumber: string;
    ////   
       aadharNo: string;
    ////   
       pan: string; // Will upload pan card
    ////   
       aadhar: string; // Will upload aadhar document
     ////  
       password:string;
    ////   
       hotelEmail: string;
    ////   
       hotelWebsite: string;
    ////   
       longitude: string;
   ////
       latitude: string;
    ////   
       gpsLocation: string;
    ////   
       hotelAddress: string;
    ////   
       businessPan: string; // Will upload business pan card
    ////   
       gstCertificate: string; // Will upload gst certificate
     ////  
       pincode: string;
    ////   
       state: string;
   ////    
       city: string;
      //// 
       landmark: string;
    ////   
       totalRoom: string;
    ////   
       rooms: {
      roomNumber: string;
      roomType: string;
      amenities: string[];
    }[];
  }



