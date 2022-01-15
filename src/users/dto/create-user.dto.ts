import { IsEmail, MinLength, MaxLength, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;
  //readonly 읽기 전용 배열

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly nickname: string;

  @IsString()
  password: string;
}
