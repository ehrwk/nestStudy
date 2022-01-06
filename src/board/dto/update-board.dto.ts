import { IsString, MaxLength, IsNotEmpty, IsInt } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateBoardDto } from "./create-board.dto";

export class UpdateBoardDto extends PartialType(createBoardDto){}
