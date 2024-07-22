import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // Auth service will be initialized when AuthController created
  constructor(private authService: AuthService) {
    // authService.doSomething(); // So in this code I can call the function from service
  }

  // some resquest from client
  @Post('/register')
  register() {
    return this.authService.register();
  }

  // Post
  @Post('login')
  login() {
    return this.authService.login();
  }
  
  @Get('/home')
  getData() {
    return this.authService.getData();
  }
}
