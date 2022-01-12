import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @MaxLength(300)
  @IsString()
  readonly content: string;

  @IsInt()
  readonly userId: number;

  @IsInt()
  readonly boardId: number;
}
