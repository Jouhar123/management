import { Controller, Get, Render, Query, Post, Body } from '@nestjs/common';
import { EmailService } from './mailer.service';


@Controller('emails')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('send')
    @Render('index')
    async sendEmail(
        @Body('name') name: string,
        @Body('email') email: string,
    ) { 
        const randomNumber = Math.floor(100000 + Math.random() * 900000); 
        const verificationCode = randomNumber.toString();
        console.log(verificationCode);
        try {
            // Modify this line to send email with the provided name and email
            await this.emailService.sendEmail(email, 'Moonlight Registration', 'views/index.hbs', { verificationCode, name });
            return  {verificationCode} ; 
        } catch (error) {
            console.error(error);
            return { errorMessage: 'Failed to send email' }; 
        }
    }
    
    
}
