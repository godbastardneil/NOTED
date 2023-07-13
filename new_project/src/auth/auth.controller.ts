import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // validate from LocalStrategy
  @UseGuards(LocalAuthGuard) 
  async login(@Request() req)
  {
    return this.authService.login(req.user);
  }

  @Get('profile')
  // validate from LocalStrategy
  @UseGuards(JwtAuthGuard) 
  async getProfile(@Request() req)
  {
    return (req.user);
  }
}
