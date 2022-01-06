import { Module } from '@nestjs/common';
import { BoardsModule } from './board/board.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [BoardsModule, UserModule],
})
export class AppModule {}
