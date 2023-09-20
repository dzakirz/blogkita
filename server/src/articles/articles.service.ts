import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private readonly db: PrismaService) {}

  async getAllArticles() {
    return await this.db.article.findMany();
  }
}
