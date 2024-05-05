import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class OnboardingChecklist extends Document {
    @Prop({ required: true })
    hotelPreboardingId: string;
  
    @Prop({ required: true })
    hotelOnboardingId: string;
  
    @Prop({ required: true, enum: ['none', 'pending', 'completed'], default: 'none' })
    status: string;
  
    @Prop({ required: true, default: false })
    isOnboarding: boolean;
  }
  
  export const OnboardingChecklistSchema = SchemaFactory.createForClass(OnboardingChecklist);