import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    return this.authService.registerUser(dto);
  }
}
