import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {ArticleServiceService} from "../../services/article-service.service";
import {WritingArticle} from "../../models/writing-article";

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  activeCategory: string = 'All';

  articles: WritingArticle[] = [];


  constructor(private articleService: ArticleServiceService) {
    articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    })
  }

  get featuredArticle(): WritingArticle {
    return this.articles[0];
  }

  get categories(): string[] {
    return ['All', ...new Set(this.articles.map(article => article.category))];
  }

  get filteredArticles(): WritingArticle[] {
    return this.activeCategory === 'All'
      ? this.articles
      : this.articles.filter(article => article.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }
}
