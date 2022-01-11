import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { Board } from '@prisma/client';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async createBoard(boardData: CreateBoardDto) {
    const { userId } = boardData;
    const findId = await this.prisma.findUserByUnique({ id: userId });
    if (!findId) {
      return '없는 유저정보 입니다.';
    }

    return this.prisma.createBoard(boardData);
  }

  async getBoard(boardIndex: number): Promise<Board | string> {
    const findBoard = await this.prisma.findBoardByUnique({ id: boardIndex });
    if (!findBoard) {
      return '게시글이 존재하지 않습니다.';
    }
    return findBoard;
  }

  async getAllBoards() {
    const findBoard = await this.prisma.getAllBoards();
    if (!findBoard) {
      return '게시글이 존재하지 않습니다.';
    }
    return this.prisma.getAllBoards();
  }

  //작성자, 수정자 같은지
  //게시글 존재여부
  async updateBoard(boardIndex: number, boardData: UpdateBoardDto) {
    // const getBoardUser = await this.prisma.findBoardByUnique({
    //   id: boardIndex,
    // });
    // const { userId } = getBoardUser;
    //작성자 //일단 구현 못함
    const findBoard = await this.prisma.findBoardByUnique({ id: boardIndex });
    if (!findBoard) {
      return '게시글이 존재하지 않습니다.';
    }

    return this.prisma.updateBoard(boardIndex, boardData);
  }
}
