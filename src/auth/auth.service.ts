import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {
    super();
  }

  //로그인하고 유저 있는지 확인...
  //loginRequest에 이메일하고 패스워드
  async validateUser(email: string, password: string): Promise<any> {
    //유저가 있는지 검사
    const findUser = await this.prisma.findUserByUnique({ email });
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      const { password, ...result } = findUser;
      return result;
    } else {
      return null; //('이메일과 비밀번호를 확인해주세요', 400);
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
