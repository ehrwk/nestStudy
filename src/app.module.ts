import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BoardsModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [BoardsModule, UserModule, CommentModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
