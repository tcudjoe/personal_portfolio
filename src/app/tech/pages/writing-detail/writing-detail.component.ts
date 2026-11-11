import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FooterConfig} from '../../../shared/components/footer/footer.component';
import {WritingArticle} from '../../models/writing-article';
import {ArticleServiceService} from "../../services/article-service.service";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-writing-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss'
})
export class WritingDetailComponent {
  readonly footerConfig: Partial<FooterConfig> = {showCallout: true};

  articles: WritingArticle[] = [];

  article: WritingArticle | null = null;
  relatedArticles: WritingArticle[] = [];

  constructor(route: ActivatedRoute, private articleService: ArticleServiceService) {
    route.paramMap.subscribe((params) => this.setArticle(params.get('slug')));

    combineLatest([route.paramMap, articleService.getArticles()])
      .subscribe(([params, articles]) => {
        this.articles = articles;
        this.setArticle(params.get('slug'));
      });
  }

  private setArticle(slug: string | null): void {
    if (!slug) {
      this.article = null;
      return;
    }

    this.articleService.getArticles().pipe(
      map(articles => articles.find(article => article.slug === slug))
    ).subscribe(article => {
      this.article = article ?? null;
    });
  }
}
