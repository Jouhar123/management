
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
  } from '@nestjs/common';

  import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/Dto/login.dto';
import { IS_PUBLIC_KEY, Public } from './meta';



  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService,
    ) {}
  

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      const token = await this.authService.login(loginDto);
    return { token };
    }
    
    @Public()
    @Post('signup')
    async signup(@Body() signupData: any): Promise<void> {
      try {
        await this.authService.signup(signupData);
      } catch (error) {
        // Handle any errors and return appropriate responses
        throw error;
      }
    }
  


 
}
  



