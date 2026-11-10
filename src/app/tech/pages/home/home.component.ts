import {Component} from '@angular/core';
import {WorkProject} from "../../models/work-project";
import {WritingArticle} from "../../models/writing-article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly homeArticles: WritingArticle[] = [
    {
      slug: 'documenting-architecture-decisions',
      category: 'Software Architecture',
      readingTime: 6,
      title: 'Why I document architecture decisions.',
      excerpt: 'Good code explains what happens. Good documentation explains why.',
      date: ''
    },
    {
      slug: 'building-a-monitoring-platform',
      category: 'Building in Public',
      readingTime: 8,
      title: 'Building my own monitoring platform.',
      excerpt: 'From an idea to a system that understands dependencies and service health.',
      date: ''
    },
    {
      slug: 'engineering-and-ai',
      category: 'Engineering & AI',
      readingTime: 5,
      title: "Just because it works doesn't mean it works well.",
      excerpt: 'Thoughts on AI-assisted development and engineering responsibility.',
      date: ''
    }
  ];

  readonly aboutImages = [
    {label: 'Music performance photo placeholder', variant: 'performance'},
    {label: 'Guitar photo placeholder', variant: 'guitar'},
    {label: 'Portrait photo placeholder', variant: 'portrait'},
    {label: 'Studio portrait placeholder', variant: 'studio'}
  ];

  readonly featuredProject: WorkProject = {
    slug: 'compliance-management-platform',
    category: 'Client work · Hibera',
    title: 'Compliance Management Platform',
    description: 'Designing and developing a platform to make compliance workflows easier to manage.',
    scope: "Client Work"
  };

  readonly projects: WorkProject[] = [
    {
      slug: 'my-homelab',
      category: 'Personal · Infrastructure',
      title: 'My Homelab',
      scope: 'Client Work'
    },
    {
      slug: 'monitoring-platform',
      category: 'Personal · Building in public',
      title: 'Monitoring Platform',
      scope: 'Client Work'
    }
  ];
}
