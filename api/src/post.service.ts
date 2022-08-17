import {Injectable} from '@nestjs/common'
import {PrismaService} from './prisma.service'
import {Post, Prisma} from '@prisma/client'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
}

