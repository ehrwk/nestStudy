import { IsString, MaxLength, IsNotEmpty, IsInt } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsInt()
  readonly userId: number;
}
