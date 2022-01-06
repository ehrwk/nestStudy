import { Body, Controller, Param, Get, Post, Put } from '@nestjs/common';
import { Board } from '@prisma/client';
import { createBoardDto } from './dto/create-board.dto';
import { updateBoardDto } from './dto/update-board.dto';

import { BoardService } from './board.service';

@Controller('board')
export class BoradController {
    constructor(private boardService: BoardService){}

    //게시글 1개 조회
    @Get("/:id")
    getBoard(@Param("id") boardIndex: number){
        return this.boardService.getBoard(boardIndex);
    }
    
    //게시글 전체조회
    @Get()
    getAllBoards(){
        return this.boardService.getAllBoards();
    }

    //게시글 생성
    @Post()
    createBoard(@Body() boardData: createBoardDto){
        return this.boardService.createBoard(boardData);
    }

    //게시글 업데이트(제목, 내용 둘다 옵션널하게)
    //put은 전체 수정(대체)
    //fetch는 부분 수정
    @Put("/:id")
    updateBoard(@Param("id") boardIndex: number, @Body() boardData: updateBoardDto){
        return this.boardService.updateBoard(boardIndex, boardData);

    }
   

}
