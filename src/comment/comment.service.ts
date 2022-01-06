import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { PrismaService } from "src/prisma/prisma.service";

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdatecommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService{

    constructor(private prisma: PrismaService){}

    //getComment(boardIndex)
    //createComment(commentData)
    //updateComment(commentData)

    getComment(boardIndex: number){
        return this.prisma.getComment(boardIndex);
    }
    createComment(commentData){
        return this.prisma.createComment(commentData);
    }
    updateComment(commentData){
        return this.prisma.updateComment(commentData);
    }




}