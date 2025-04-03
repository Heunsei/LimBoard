import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  async registerWithEmail(registerUserDto: RegisterUserDto) {
    const prisma = new PrismaClient();
    console.log(registerUserDto);
    const emailExist = await prisma.user.findFirst({
      where: {
        email: registerUserDto.email,
      },
    });

    if (emailExist) throw new BadRequestException('이미 존재하는 email 입니다');

    const createUser = await prisma.user.create({
      data: {
        ...registerUserDto,
      },
    });

    return createUser;
  }

  async loginWithEmail(id: string, password: string) {}
}
