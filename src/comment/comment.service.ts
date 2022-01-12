import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdatecommentDto } from './dto/update-comment.dto';

import { Comment } from '@prisma/client';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  //게시글 존재여부
  //유저 존재여부
  async createComment(commentData: CreateCommentDto) {
    const { userId, boardId } = commentData;
    const findUser = await this.prisma.findCommentById({ userId });
    const findBoard = await this.prisma.findCommentById({ boardId });
    if (!findUser) {
      return '없는 유저정보입니다.';
    }
    if (!findBoard) {
      return '게시글이 존재하지 않습니다.';
    }

    return this.prisma.createComment(commentData);
  }

  //게시글 존재여부
  async getComment(boardIndex: number) {
    const findBoard = await this.prisma.findCommentById({
      boardId: boardIndex,
    });
    if (!findBoard) {
      return '게시글이 존재하지 않습니다.';
    }

    return this.prisma.getComment(boardIndex);
  }

  //작성자와 수정자가 같은지
  //이건 모르겠습니다,,
  async updateComment(CommentData: UpdatecommentDto) {
    return this.prisma.updateComment(CommentData);
  }
}
