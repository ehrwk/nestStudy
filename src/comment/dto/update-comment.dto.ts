import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdatecommentDto{
    @IsInt()
    readonly id: number;

    @IsNotEmpty()
    @MaxLength(300)
    @IsString()
    readonly content: string;
}