import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InvitationService } from './invitation.service';
import { Invitation, InvitationSchema } from './schema/Invite.schema';
import { InvitationController } from './invitation.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invitation.name, schema: InvitationSchema }])
  ],
  controllers:[InvitationController],
  providers: [InvitationService],
})
export class InvitationModule {}
