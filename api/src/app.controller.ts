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

  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.getPosts()
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.getPost({id: Number(id)})
  }

  @Post('post')
  async createPost(
    @Body() postData: {title: string; content?: string},
  ): Promise<PostModel> {
    const {title, content} = postData;
    return this.postService.createPost({
      title,
      content,
    });
  }

  @Put('post/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() updateData: {title: string, content?: string},
  ): Promise<PostModel> {
    return this.postService.updatePost({
      where: {id: Number(id)},
      data: updateData,
    })
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({id: Number(id)});
  }
}
