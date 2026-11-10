import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {WritingArticlePreview} from "../../models/writing-article-preview";
import {ArticleServiceService} from "../../services/article-service.service";

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  readonly categories = ['All', 'Architecture', 'Engineering', 'Build Logs'] as const;
  activeCategory: string = 'All';

  articles: WritingArticlePreview[] = [
    {
      slug: 'documenting-architecture-decisions',
      category: 'Architecture',
      title: 'Why I document architecture decisions.',
      description: 'Good code explains what happens. Good documentation explains why.',
      date: '02 September 2026',
      readTime: 6
    },
    {
      slug: 'lessons-from-building-a-monitoring-platform',
      category: 'Build Logs',
      title: 'Building my own monitoring platform.',
      description: 'Designing a system that understands dependencies and service health.',
      date: '19 August 2026',
      readTime: 8
    },
    {
      slug: 'engineering-in-an-ai-assisted-world',
      category: 'Engineering',
      title: "Just because it works doesn't mean it works well.",
      description: 'Engineering responsibility in an AI-assisted world.',
      date: '11 August 2026',
      readTime: 5
    },
    {
      slug: 'designing-a-better-deployment-workflow',
      category: 'Build Logs',
      title: 'Designing a better deployment workflow.',
      description: 'Exploring self-hosting, Docker and deployment practices.',
      date: '23 July 2026',
      readTime: 7
    }
  ];


  constructor(private articleService: ArticleServiceService) {
    articleService.getArticles().subscribe(articles => {})
  }

  get featuredArticle(): WritingArticlePreview {
    return this.articles[0];
  }

  get filteredArticles(): WritingArticlePreview[] {
    return this.activeCategory === 'All'
      ? this.articles
      : this.articles.filter((article) => article.category === this.activeCategory);
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }
}
