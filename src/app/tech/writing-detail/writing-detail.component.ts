import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterConfig } from '../../shared/components/footer/footer.component';

interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  decisionRecord?: {
    label: string;
    title: string;
    flow: string;
  };
}

interface WritingArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  sections: ArticleSection[];
}

@Component({
  selector: 'app-writing-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss'
})
export class WritingDetailComponent {
  readonly footerConfig: Partial<FooterConfig> = { showCallout: true };

  readonly articles: WritingArticle[] = [
    {
      slug: 'documenting-architecture-decisions',
      category: 'Software architecture',
      title: 'Why I document architecture decisions.',
      excerpt: 'Good code explains what happens. Good documentation explains why.',
      date: '19 August 2026',
      readingTime: 6,
      sections: [
        {
          id: 'the-problem',
          title: 'The problem with undocumented decisions',
          paragraphs: [
            'Imagine joining a software team and discovering that nobody knows why an important architectural decision was made. The code tells you how the system works, but rarely why it was designed that way.',
            'This is why understanding and documenting technical decisions matters.'
          ],
          decisionRecord: {
            label: 'Example / architecture decision record',
            title: 'ADR-001: Database selection',
            flow: 'Context → Decision → Alternatives → Consequences'
          }
        },
        {
          id: 'making-decisions',
          title: 'Making decisions visible',
          paragraphs: [
            'An architecture decision record captures the context around a choice, the options considered and the reason a team moved forward with one of them.',
            'Keeping the record short and close to the code makes it easier for the next person to understand the trade-offs.'
          ]
        },
        {
          id: 'trade-offs',
          title: 'Trade-offs are part of the story',
          paragraphs: [
            'Most engineering choices solve one problem while creating constraints elsewhere. Writing those constraints down helps teams revisit a decision when the context changes.'
          ]
        },
        {
          id: 'lessons-learned',
          title: 'What I learned',
          paragraphs: [
            'The useful part is not producing documentation for its own sake. It is creating a shared record of reasoning that helps a team make its next decision with more context.'
          ]
        }
      ]
    },
    {
      slug: 'another-perspective-on-system-design',
      category: 'Software architecture',
      title: 'Another Perspective on System Design',
      excerpt: 'A practical look at the questions that make system design clearer.',
      date: 'To be announced',
      readingTime: 5,
      sections: [
        {
          id: 'start-with-the-problem',
          title: 'Start with the problem',
          paragraphs: ['System design gets easier when the user needs, constraints and expected scale are clear before choosing technologies.']
        },
        {
          id: 'make-trade-offs-explicit',
          title: 'Make trade-offs explicit',
          paragraphs: ['There is rarely one perfect architecture. A useful design explains what it optimizes for and what it makes harder.']
        },
        {
          id: 'design-for-change',
          title: 'Design for change',
          paragraphs: ['Prefer clear boundaries that let the system evolve as requirements become better understood.']
        }
      ]
    },
    {
      slug: 'lessons-from-building-a-monitoring-platform',
      category: 'Building in public',
      title: 'Lessons from building a monitoring platform.',
      excerpt: 'Notes on turning a monitoring idea into a maintainable system.',
      date: 'To be announced',
      readingTime: 7,
      sections: [
        {
          id: 'start-small',
          title: 'Start with a small signal',
          paragraphs: ['A useful monitoring platform starts with a focused question: what needs attention, and how quickly should someone know?']
        },
        {
          id: 'reliable-data',
          title: 'Make the data reliable',
          paragraphs: ['Collection, storage and alerting each need clear failure behavior so missing data does not look like a healthy system.']
        },
        {
          id: 'iterate-from-use',
          title: 'Iterate from real use',
          paragraphs: ['Dashboards and alerts become more useful when they are shaped by the decisions people need to make.']
        }
      ]
    }
  ];

  article: WritingArticle | null = null;
  relatedArticles: WritingArticle[] = [];

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((params) => this.setArticle(params.get('slug')));
  }

  private setArticle(slug: string | null): void {
    const articleIndex = this.articles.findIndex((article) => article.slug === slug);
    this.article = articleIndex >= 0 ? this.articles[articleIndex] : null;
    this.relatedArticles = this.article
      ? this.articles.filter((_, index) => index !== articleIndex).slice(0, 2)
      : [];
  }
}
