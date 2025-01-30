import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    CommentModule,
    MongooseModule.forRoot(
      'mongodb+srv://threads-user:tWvmj1LAtLjjg82V@cluster0.trsrp.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
