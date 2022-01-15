import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BoardsModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BoardsModule, UserModule, CommentModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
