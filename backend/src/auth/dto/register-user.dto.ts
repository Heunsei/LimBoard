import { PickType } from '@nestjs/mapped-types';
import { UserEntity } from 'src/users/entities/user.entity';

export class RegisterUserDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
] as const) {}
