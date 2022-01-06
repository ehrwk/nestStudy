import { IsString, MaxLength, IsNotEmpty, IsInt } from "class-validator";

export class createBoardDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsInt()
    userId: number;
}
