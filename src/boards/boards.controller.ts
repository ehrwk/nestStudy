import { Controller, Get } from '@nestjs/common';
import { Board } from '@prisma/client';
import { BoardsService } from './boards.service';


@Controller('boards')
export class BoradsController {
    constructor(private boardsService: BoardsService){}

    @Get()
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }
    

}
