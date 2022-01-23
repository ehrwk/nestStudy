import { AuthService } from './../auth.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false,
    });
  }
  /*passport는 인증 전략를 만들어야 함.
    local인증을 하려고 함. jwt가 아니면 이걸로 된거임.
    passport라이브러리에서 strategy를 가ㅣㅈ고옴.
    local은 username임 password가 있음
    이렇게 하면 이메이로가 패스워드를 찾은 body에서 controller에ㅓ */
  async validate(email: string, password: string): Promise<any> {
    console.log('권한없음');
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new HttpException('이메일과 패스워드를 확인해주세요', 400);
    }
    return user;
  }
}
