import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
