import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity/article.entity';
import { AuthGuard } from '@nestjs/passport';
@Controller('articles')
export class ArticlesController {
    constructor(private readonly service: ArticlesService) {}

    @Get()
    getAll() {
        return this.service.getArticles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getArticle(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() article: Article) {
        return this.service.saveArticle(article);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body() article: Article) {
        return this.service.saveArticle(article);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteArticle(@Param() params) {
        this.service.deleteArticle(params.id);
        return;
    }
}
