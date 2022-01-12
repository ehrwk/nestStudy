import { Body, Controller, Param, Get, Post, Put, Patch } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdatecommentDto } from './dto/update-comment.dto';

import { CommentService } from './comment.service';
import { throws } from 'assert';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  //게시글의 댓글 전체 조회
  @Get('/:id')
  getComment(@Param('id') boardIndex: number) {
    return this.commentService.getComment(boardIndex);
  }

  //댓글 작성
  @Post()
  createComment(@Body() commentData: CreateCommentDto) {
    return this.commentService.createComment(commentData);
  }

  //댓글 수정(내용)
  @Patch()
  updateComment(@Body() commentData: UpdatecommentDto) {
    return this.commentService.updateComment(commentData);
  }
}
