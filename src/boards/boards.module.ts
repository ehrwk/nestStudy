import { Module } from '@nestjs/common';
import { BoradsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoradsController],
  providers: [BoardsService]
})
export class BoardsModule {}
