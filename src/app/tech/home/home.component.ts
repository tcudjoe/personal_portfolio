import { Component } from '@angular/core';

interface ProjectPreview {
  slug: string;
  category: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
