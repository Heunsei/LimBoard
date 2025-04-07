import { PickType } from '@nestjs/mapped-types';
import { UserEntity } from 'src/users/entity/user.entity';

export class RegisterUserDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
] as const) {}
