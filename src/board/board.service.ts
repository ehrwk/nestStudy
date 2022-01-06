import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { PrismaService } from "src/prisma/prisma.service";
import { createBoardDto } from './dto/create-board.dto';
import { updateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {

    constructor(private prisma: PrismaService){}
        
    getBoard(boardIndex: number){
        return this.prisma.getBoard(boardIndex);
    }

    getAllBoards(){
        return this.prisma.getAllBoards();
    }    
    
    createBoard(boardData: createBoardDto){
        return this.prisma.createBoard(boardData);
    }

    updateBoard(boardIndex: number, boardData: updateBoardDto){
        return this.prisma.updateBoard(boardIndex, boardData);
    }

}
