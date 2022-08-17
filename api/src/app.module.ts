import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {PostService} from './post.service';
import {PrismaService} from './prisma.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PostService, PrismaService],
})
export class AppModule {}
