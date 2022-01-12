import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdatecommentDto {
  @IsNotEmpty()
  @MaxLength(300)
  @IsString()
  readonly content: string;
}
