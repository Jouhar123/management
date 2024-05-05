import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailController } from './mailer.controller';
import { EmailService } from './mailer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    })
  ],
  providers: [EmailService],
  controllers: [EmailController], 
})
export class MailModule {}
