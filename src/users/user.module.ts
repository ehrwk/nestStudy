import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    controllers: [UserService],
    providers: [UserController]
  })
export class UserModule {}