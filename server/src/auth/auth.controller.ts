import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthRegisterDto) {
    return this.authService.registerUser(dto);
  }
}
