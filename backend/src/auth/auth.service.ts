import * as bcrypt from 'bcrypt';

import { ENV_JWT_SECRET } from 'src/common/const/env-keys.const';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  // base64로 인코딩된 이메일:패스워드를 디코드 후 이메일과 비밀번호를 반환
  decodeBasicToken(base64String: string) {
    const decoded = Buffer.from(base64String, 'base64').toString('utf8');
    const split = decoded.split(':');
    if (split.length !== 2) {
      throw new UnauthorizedException();
    }
    const email = split[0];
    const password = split[1];
    return {
      email,
      password,
    };
  }

  // 받아온 JWT 토큰을 검증하는 함수
  verifyToken(token: string) {
    return this.jwtService.verify(token, {
      secret: this.configService.get<string>(ENV_JWT_SECRET),
    });
  }

  extractTokenFromHeader(header: string, isBearer: boolean) {
    const splitToken = header.split(':');
    // 앞의 태그 유무에 따라 로직 중단을 위해 prifix 사용
    const prifix = isBearer ? 'Bearer' : 'Basic';
    if (splitToken.length !== 2 || splitToken[0] !== prifix) {
      throw new UnauthorizedException('토큰에 문제가 있습니다');
    }
    const token = splitToken[1];
    return token;
  }

  async registerWithEmail(registerUserDto: RegisterUserDto) {
    const hash = await bcrypt.hash(
      registerUserDto.password,
      parseInt(this.configService.get<string>(ENV_JWT_SECRET)),
    );
    const createUser = await this.usersService.createUser({
      ...registerUserDto,
      password: hash,
    });
    return createUser;
  }

  async loginWithEmail(user: Pick<UserEntity, 'email' | 'password'>) {
    const prisma = new PrismaClient();
    const loginUser = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });
    if (!loginUser) {
      throw new UnauthorizedException('해당 유저가 존재하지 않습니다');
    }
    const isPasswordOk = await bcrypt.compare(
      user.password,
      loginUser.password,
    );
    if (!isPasswordOk) throw new UnauthorizedException('비밀번호가 틀립니다');
    return loginUser;
  }
}
