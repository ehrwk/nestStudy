import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {

    constructor(private prisma: PrismaService){}
        
    getBoard(boardIndex: number){
        return this.prisma.getBoard(boardIndex);
    }

    getAllBoards(){
        return this.prisma.getAllBoards();
    }    
    
    createBoard(boardData: CreateBoardDto){
        return this.prisma.createBoard(boardData);
    }

    updateBoard(boardIndex: number, boardData: UpdateBoardDto){
        return this.prisma.updateBoard(boardIndex, boardData);
    }

}
