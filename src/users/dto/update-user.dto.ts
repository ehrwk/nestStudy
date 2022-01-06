import { IsEmpty, MinLength, MaxLength, IsString} from "class-validator";
//import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

//export class UpdateUserDto extends PartialType(CreateUserDto){}

export class UpdateUserDto{
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    @IsEmpty()
    readonly nickname: string;
}