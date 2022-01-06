import { IsString, MaxLength, IsNotEmpty, IsInt } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { createBoardDto } from "./create-board.dto";

export class updateBoardDto extends PartialType(createBoardDto){}
