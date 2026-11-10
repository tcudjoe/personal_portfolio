import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FooterConfig} from '../../../shared/components/footer/footer.component';
import {WorkProjectDetail} from "../../models/work-project-detail";


@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.scss'
})
export class WorkDetailComponent {
  readonly footerConfig: Partial<FooterConfig> = {
    eyebrowText: 'Keep exploring',
    showEyebrow: true,
    headerText: "Curious what else I've built?",
    showBody: false,
    buttonText: 'All Projects',
    buttonIcon: 'arrow',
    buttonHref: '/work'
  };

  readonly projects: WorkProjectDetail[] = [
    {
      slug: 'compliance-management-platform',
      title: 'Compliance Management Platform',
      category: 'Client project',
      year: '2026',
      summary: 'Designing and developing a platform to make compliance workflows easier to manage.',
      technologies: ['Angular', 'Java', 'Spring', 'Docker', 'Postgres'],
      metadata: [
        {label: 'Project type', value: 'Client work · Hibera'},
        {label: 'Client / organization', value: 'Normwaard b.v.'},
        {label: 'My role', value: 'Software Engineer'},
        {label: 'Technologies', value: 'Java · Angular · Heroku'},
        {label: 'Project period', value: '2022 – 2026'},
        {label: 'GitHub / Live URL', value: 'Project links to be added'}
      ]
    },
    {
      slug: 'my-homelab',
      title: 'My Homelab',
      category: 'Personal project',
      year: 'Ongoing',
      summary: 'A personal infrastructure project. The project overview and outcomes will be added here.',
      technologies: ['Infrastructure', 'Self-hosting'],
      metadata: [
        {label: 'Project type', value: 'Personal · Infrastructure'},
        {label: 'Client / organization', value: 'Personal project'},
        {label: 'My role', value: 'Independent'},
        {label: 'Technologies', value: 'To be confirmed'},
        {label: 'Project period', value: 'Ongoing'},
        {label: 'GitHub / Live URL', value: 'Project links to be added'}
      ]
    },
    {
      slug: 'monitoring-platform',
      title: 'Monitoring Platform',
      category: 'Personal project',
      year: 'Ongoing',
      summary: 'A monitoring platform project. The project overview and outcomes will be added here.',
      technologies: ['Monitoring', 'Software architecture'],
      metadata: [
        {label: 'Project type', value: 'Personal · Building in public'},
        {label: 'Client / organization', value: 'Personal project'},
        {label: 'My role', value: 'Independent'},
        {label: 'Technologies', value: 'To be confirmed'},
        {label: 'Project period', value: 'Ongoing'},
        {label: 'GitHub / Live URL', value: 'Project links to be added'}
      ]
    },
    {
      slug: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Personal project',
      year: '2026',
      summary: 'A redesign of my personal portfolio. Project decisions and implementation details will be added here.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      metadata: [
        {label: 'Project type', value: 'Personal · Web development'},
        {label: 'Client / organization', value: 'Personal project'},
        {label: 'My role', value: 'Designer and developer'},
        {label: 'Technologies', value: 'Angular · TypeScript · SCSS'},
        {label: 'Project period', value: '2026 – ongoing'},
        {label: 'GitHub / Live URL', value: 'Project links to be added'}
      ]
    }
  ];

  readonly storySections = [
    {
      number: '01',
      label: 'The problem',
      title: 'Understanding the challenge',
      description: 'Add the project context, the problem to solve and the requirements that shaped the work.'
    },
    {
      number: '02',
      label: 'My contribution',
      title: 'What I was responsible for.',
      description: 'Describe the features, decisions and responsibilities you personally owned.'
    },
    {
      number: '03',
      label: 'Architecture & decisions',
      title: 'Architecture',
      description: 'Add the important architectural choices and explain why they were made.',
      image: 'architecture'
    },
    {
      number: '04',
      label: 'Challenges',
      title: "What didn't go according to plan?",
      description: 'Describe an engineering challenge, a trade-off and how it was resolved.'
    },
    {
      number: '05',
      label: 'Outcome & lessons',
      title: 'What I learned along the way.',
      description: "Add what was delivered, what you learned and what you'd do differently next time."
    },
    {
      number: '06',
      label: 'Screenshots',
      title: 'A closer look at the product.',
      description: 'Add product screenshots or other supporting project images.',
      image: 'screenshots'
    }
  ];

  project: WorkProjectDetail | null = null;
  nextProject: WorkProjectDetail | null = null;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((params) => this.setProject(params.get('slug')));
  }

  private setProject(slug: string | null): void {
    const projectIndex = this.projects.findIndex((project) => project.slug === slug);
    this.project = projectIndex >= 0 ? this.projects[projectIndex] : null;
    this.nextProject = projectIndex >= 0
      ? this.projects[(projectIndex + 1) % this.projects.length]
      : null;
    this.footerConfig.secondaryLink = this.nextProject
      ? {
        eyebrow: 'Next project',
        label: this.nextProject.title,
        href: `/work/${this.nextProject.slug}`
      }
      : undefined;
  }
}
