import { Component } from '@angular/core';

interface ProjectPreview {
  slug: string;
  category: string;
  title: string;
  description?: string;
}

interface ArticlePreview {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly homeArticles: ArticlePreview[] = [
    {
      slug: 'documenting-architecture-decisions',
      category: 'Software Architecture',
      readTime: '6 min read',
      title: 'Why I document architecture decisions.',
      description: 'Good code explains what happens. Good documentation explains why.'
    },
    {
      slug: 'building-a-monitoring-platform',
      category: 'Building in Public',
      readTime: '8 min read',
      title: 'Building my own monitoring platform.',
      description: 'From an idea to a system that understands dependencies and service health.'
    },
    {
      slug: 'engineering-and-ai',
      category: 'Engineering & AI',
      readTime: '5 min read',
      title: "Just because it works doesn't mean it works well.",
      description: 'Thoughts on AI-assisted development and engineering responsibility.'
    }
  ];

  readonly aboutImages = [
    { label: 'Music performance photo placeholder', variant: 'performance' },
    { label: 'Guitar photo placeholder', variant: 'guitar' },
    { label: 'Portrait photo placeholder', variant: 'portrait' },
    { label: 'Studio portrait placeholder', variant: 'studio' }
  ];

  readonly featuredProject: ProjectPreview = {
    slug: 'compliance-management-platform',
    category: 'Client work · Hibera',
    title: 'Compliance Management Platform',
    description: 'Designing and developing a platform to make compliance workflows easier to manage.'
  };

  readonly projects: ProjectPreview[] = [
    {
      slug: 'my-homelab',
      category: 'Personal · Infrastructure',
      title: 'My Homelab'
    },
    {
      slug: 'monitoring-platform',
      category: 'Personal · Building in public',
      title: 'Monitoring Platform'
    }
  ];
}
