import { Module } from '@nestjs/common';
import { BoradController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  controllers: [BoradController],
  providers: [BoardService]
})
export class BoardsModule {}
