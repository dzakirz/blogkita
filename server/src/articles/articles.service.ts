import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private readonly db: PrismaService) {}

  async getAllArticles() {
    return await this.db.article.findMany();
  }

  async getArticleById(id: string) {
    const article = await this.db.article.findUnique({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const result = {
      data: article,
    };

    return result;
  }
}
