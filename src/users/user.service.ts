import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userData: CreateUserDto) {
    let { nickname, email, password } = userData;
    const findNick = await this.prisma.findUserByUnique({ nickname });
    const findEmail = await this.prisma.findUserByUnique({ email });
    if (findNick) {
      return '닉네임이 중복';
    }
    if (findEmail) {
      return '이메일 중복';
    }

    const hash = async (password) => {
      return await bcrypt.hash(password, 10);
    };

    userData.password = await hash(password);
    //비동기 처리시 프로미스화 하기때문에 무조건 await를 써야함...

    return this.prisma.createUser(userData);
  }

  async update(userId: number, userData: UpdateUserDto) {
    const { nickname } = userData;
    const findId = await this.prisma.findUserByUnique({ id: userId });
    const findNick = await this.prisma.findUserByUnique({ nickname });

    if (!findId) {
      return '없는 유저정보 입니다.';
    }

    if (findNick) {
      return '닉네임이 중복';
    }

    return this.prisma.updateUser(userId, userData);
  }

  async getUser(userId: number): Promise<User | string> {
    const findUser = await this.prisma.findUserByUnique({ id: userId });
    if (!findUser) {
      return '없는 유저입니다';
    }
    return findUser;
  }
}
