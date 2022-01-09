import { IsEmpty, MinLength, MaxLength, IsString } from 'class-validator';
//import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from './create-user.dto';

//export class UpdateUserDto extends PartialType(CreateUserDto){}

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly nickname: string;
}

/*
구조분해할당.
object  = {
    a : 1,
    b : 2,
    c : 3
}
const { a, b, c} = object;

console.log(a) === 1
*/
