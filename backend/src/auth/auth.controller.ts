import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  postRegisterEmail(@Body() registeruserDto: RegisterUserDto) {
    return this.authService.registerWithEmail(registeruserDto);
  }

  @Post('login')
  postLoginEmail(@Param() id: string, @Param() password: string) {
    return this.authService.loginWithEmail(id, password);
  }
}
