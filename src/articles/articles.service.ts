import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.articlesRepository.find({
      select: ['title', 'content', 'author'],
      where: [{ id: id }], //where: [{id}] si les deux variables ont le même nom
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.articlesRepository.save(article);
  }

  deleteArticle(article: Article): void {
    this.articlesRepository.delete(article);
  }
}
