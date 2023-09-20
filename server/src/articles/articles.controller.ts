import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { AuthJwtGuard } from 'src/auth/guards/auth-jwt.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(AuthJwtGuard)
  @Get()
  getAllArticles() {
    return this.articlesService.getAllArticles();
  }

  @UseGuards(AuthJwtGuard)
  @Get(':id')
  getArticleById(@Param('id') id: string) {
    return this.articlesService.getArticleById(id);
  }
}
