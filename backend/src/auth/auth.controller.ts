import { Body, Controller, Headers, Param, Post } from '@nestjs/common';
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
  postLoginEmail(@Headers('authorization') rawToken: string) {
    // 입력값 Basic email:password(base64)
    const token = this.authService.extractTokenFromHeader(rawToken, false);
    const credentials = this.authService.decodeBasicToken(token);
    return this.authService.loginWithEmail(credentials);
  }
}
