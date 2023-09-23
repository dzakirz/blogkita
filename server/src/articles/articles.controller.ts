import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthJwtGuard } from 'src/auth/guards/auth-jwt.guard';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

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

  @UseGuards(AuthJwtGuard)
  @Post()
  createArticle(@Req() req: any, @Body() dto: CreateArticleDto) {
    return this.articlesService.createArticle(req, dto);
  }

  @UseGuards(AuthJwtGuard)
  @Put(':id')
  updateArticle(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articlesService.updateArticle(id, dto);
  }

  @UseGuards(AuthJwtGuard)
  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(id);
  }
}
