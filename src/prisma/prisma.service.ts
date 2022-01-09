import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { throws } from 'assert';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { CreateBoardDto } from 'src/board/dto/create-board.dto';
import { UpdateBoardDto } from 'src/board/dto/update-board.dto';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { UpdatecommentDto } from 'src/comment/dto/update-comment.dto';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  //user
  async createUser(userData: CreateUserDto): Promise<User> {
    return await this.user.create({
      data: userData,
    });
  }

  async findUserByUnique(input: Prisma.UserWhereUniqueInput) {
    return await this.user.findUnique({
      where: input,
    });
  }

  async updateUser(userIdx: number, userData: UpdateUserDto) {
    return await this.user.update({
      where: {
        id: userIdx,
      },
      data: {
        nickname: userData.nickname,
      },
    });

    //findUserBy
  }

  //board
  async getBoard(boardIdx: number) {
    return await this.board.findUnique({
      where: {
        id: boardIdx,
      },
    });
  }

  async getAllBoards() {
    return await this.board.findMany();
  }

  async createBoard(boardData: CreateBoardDto) {
    const { content, title, userId } = boardData;
    return await this.board.create({
      data: {
        title: title,
        content: content,
        userId: userId,
      },
    });
  }

  async updateBoard(boardIdx: number, boardData: UpdateBoardDto) {
    const { title, content } = boardData;
    return await this.board.update({
      where: {
        id: boardIdx,
      },
      data: {
        title: title,
        content: content,
        updateAt: new Date(),
      },
    });
  }

  //comment
  async getComment(boardIdx: number) {
    return await this.comment.findUnique({
      where: {
        id: boardIdx,
      },
    });
  }

  async createComment(commentData: CreateCommentDto) {
    const { content, userId, postId } = commentData;
    return await this.comment.create({
      data: {
        content: content,
        userId: userId,
        postId: postId,
      },
    });
  }

  async updateComment(commentData: UpdatecommentDto) {
    const { id, content } = commentData;
    return await this.comment.update({
      where: {
        id: id,
      },
      data: {
        content: content,
      },
    });
  }
}
