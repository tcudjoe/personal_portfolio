import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FooterConfig} from '../../../shared/components/footer/footer.component';
import {Blog} from '../../models/blog';
import {DirectusService} from "../../services/directus.service";
import {combineLatest} from "rxjs";
import {environment} from '../../../../environments/environment.development';

interface ArticleHeading {
  id: string;
  text: string;
  level: 1 | 2 | 3;
}

@Component({
  selector: 'app-writing-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss'
})
export class WritingDetailComponent implements AfterViewChecked {
  readonly footerConfig: Partial<FooterConfig> = {showCallout: true};

  @ViewChild('articleContent') private articleContent?: ElementRef<HTMLElement>;

  articles: Blog[] = [];

  article: Blog | null = null;
  relatedArticles: Blog[] = [];
  tocHeadings: ArticleHeading[] = [];
  authorImageLoaded = false;

  ngAfterViewChecked(): void {
    this.applyHeadingIds();
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly directusService: DirectusService
  ) {
    combineLatest([this.route.paramMap, this.directusService.getAllBlogs()])
      .subscribe(([params, articles]) => {
        this.articles = articles;
        const slug = params.get('slug');
        this.authorImageLoaded = false;
        this.article = articles.find(article => article.slug === slug) ?? null;
        this.tocHeadings = this.buildTableOfContents(this.article);
        this.relatedArticles = articles
          .filter(article => article.slug !== slug)
          .slice(0, 2);
      });
  }

  getAssetUrl(fileId: string): string {
    return `${environment.api_url}/assets/${fileId}`;
  }

  scrollToHeading(event: MouseEvent, headingId: string): void {
    event.preventDefault();

     this.router.navigate([], {
      relativeTo: this.route,
      fragment: headingId
    }).then(() => {
      window.setTimeout(() => {
        document.getElementById(headingId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }

  private buildTableOfContents(article: Blog | null): ArticleHeading[] {
    const headings: ArticleHeading[] = [];

    for (const section of article?.sections ?? []) {
      if (section.collection !== 'block_text' || !section.item.body_text) continue;

      const document = new DOMParser().parseFromString(section.item.body_text, 'text/html');
      const sectionHeadings = Array.from(document.body.querySelectorAll<HTMLElement>('h1, h2, h3'));

      sectionHeadings.forEach((heading, index) => {
        const text = heading.textContent?.trim();
        if (!text) return;

        const id = `article-heading-${section.item.id}-${index + 1}`;
        headings.push({
          id,
          text,
          level: Number(heading.tagName.slice(1)) as ArticleHeading['level']
        });
      });

    }

    return headings;
  }

  private applyHeadingIds(): void {
    const articleElement = this.articleContent?.nativeElement;
    if (!articleElement || !this.tocHeadings.length) return;

    const renderedHeadings = articleElement.querySelectorAll<HTMLElement>(
      '.writing-article__rich-text h1, .writing-article__rich-text h2, .writing-article__rich-text h3'
    );
    let tocIndex = 0;

    renderedHeadings.forEach(heading => {
      if (!heading.textContent?.trim()) return;

      const tocHeading = this.tocHeadings[tocIndex++];
      if (!tocHeading) return;

      heading.id = tocHeading.id;
      heading.style.scrollMarginTop = '2rem';
    });
  }
}
