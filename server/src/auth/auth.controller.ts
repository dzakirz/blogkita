import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthJwtGuard } from './guards/auth-jwt.guard';
import { AuthLocalGuard } from './guards/auth-local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthRegisterDto) {
    return this.authService.registerUser(dto);
  }

  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(AuthJwtGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user;
  }
}
