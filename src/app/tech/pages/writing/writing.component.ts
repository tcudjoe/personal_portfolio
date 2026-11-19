import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Blog} from "../../models/blog";
import {DirectusService} from "../../services/directus.service";
import {environment} from '../../../../environments/environment.development';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  activeCategory: string = 'All';

  articles: Blog[] = [];
  featuredImageLoaded = false;


  constructor(private readonly directusService: DirectusService) {
    this.directusService.getAllBlogs().subscribe({
      next: articles => this.articles = articles,
      error: error => console.error('Directus request failed:', error)
    });
  }

  get featuredArticle(): Blog {
    return this.articles[0];
  }

  get categories(): string[] {
    return ['All', ...new Set(
      this.articles
        .map(article => article.category?.name)
        .filter((category): category is string => Boolean(category))
    )];
  }

  get filteredArticles(): Blog[] {
    return this.activeCategory === 'All'
      ? this.articles
      : this.articles.filter(article => article.category?.name === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  getAssetUrl(fileId: string): string {
    return `${environment.api_url}/assets/${fileId}`;
  }
}
