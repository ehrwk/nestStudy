import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoradController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  controllers: [BoradController],
  providers: [BoardService, PrismaService],
})
export class BoardsModule {}
