import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from '@prisma/client';
import { BoardsService } from './boards.service';


@Controller('boards')
export class BoradsController {
    constructor(private boardsService: BoardsService){}

    //게시글 1개 조회
    
    
    @Get()
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    // @Post()
    // createBoard(
    //     @Body('title') title:string,
    //     @Body('content') content: string
    //     ): Board{
    //         return this.boardsService.createBoard(title, content)

    // }
    

}
