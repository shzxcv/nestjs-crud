import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common'
import {PostService} from './post.service'
import {Post as PostModel} from '@prisma/client'

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Post('post')
  async create(
    @Body() postData: {title: string; content?: string},
  ): Promise<PostModel> {
    const {title, content} = postData;
    return this.postService.createPost({
      title,
      content,
    });
  }
}
