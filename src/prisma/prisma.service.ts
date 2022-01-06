import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { throws } from 'assert';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { createBoardDto } from 'src/board/dto/create-board.dto';
import { updateBoardDto } from 'src/board/dto/update-board.dto';


@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  //user
  async createUser(userData: CreateUserDto): Promise<User>{
    return await this.user.create({
      data: {userData},
    });
  }
  
  async findUserById(userIdx: number) {
    return await this.user.findUnique({
        where: {
            id: userIdx,
        }
    });
  }

  async updateUser(userIdx: number, userData:UpdateUserDto){
    return await this.user.update({
     where: {
       id: userIdx,
     },
     data: {
       data: userData,
     }
    })
  }

  
  //board
  async getBoard(boardIdx: number){
    return await this.board.findUnique({
      where:{
        id: boardIdx,
      }
    })
  }

  async getAllBoards(){
    return await this.board.findMany();
  }

  async createBoard(boardData: createBoardDto){
    return await this.user.create({
      data: {boardData},
    });
  }

  async updateBoard(boardIdx: number, boardData: updateBoardDto){
    return await this.board.update({
      where:{
        id: boardIdx,
      },
      data: {
        data: boardData,
      }

    })
  }

}