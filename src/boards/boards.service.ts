import { Injectable } from '@nestjs/common';
import { Board } from '@prisma/client';

import { throws } from 'assert';

@Injectable()
export class BoardsService {

    private boards: Board[] = [];

    getAllBoards(): Board[]{
        return this.boards;
    }

    //뭐가 인수인지 모르겠다. 변수명이 같아서 확인해 보도록 하기
    //id를 없어서 problem뜸
    createBoard(title: string, content: string){
        // const board: Board = {
        //     title: title,
        //     content: content,
            
        // }

        // this.boards.push(board);
        // return board;
    }

}
