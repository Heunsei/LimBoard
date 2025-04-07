import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

// TODO auth resource에서 회원가입 관리.
// USER resource 에서는 회원 조회 및 업데이트를 관리

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();

    const emailExist = await prisma.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailExist) throw new BadRequestException('이미 존재하는 email 입니다');

    const createUser = await prisma.user.create({
      data: {
        ...createUserDto,
      },
    });
    return createUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
