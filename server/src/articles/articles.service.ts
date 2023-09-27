import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

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

  async createArticle(req: any, dto: CreateArticleDto) {
    await this.db.article.create({
      data: {
        title: dto.title,
        content: dto.content,
        user: {
          connect: {
            id: req.user.id,
          },
        },
      },
    });

    const result = {
      message: 'Article created successfully',
    };

    return result;
  }

  async updateArticle(id: string, dto: UpdateArticleDto) {
    const article = await this.countArticles(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const result = {
      message: 'Article updated successfully',
    };

    await this.db.article.update({
      where: { id },
      data: {
        title: dto.title,
        content: dto.content,
      },
    });

    return result;
  }

  async deleteArticle(id: string) {
    const article = await this.countArticles(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    await this.db.article.delete({
      where: { id },
    });

    const result = {
      message: 'Article deleted successfully',
    };

    return result;
  }

  async countArticles(id: string) {
    const article = await this.db.article.count({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }
}
