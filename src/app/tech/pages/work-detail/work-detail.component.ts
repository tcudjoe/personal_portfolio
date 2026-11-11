import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FooterConfig} from '../../../shared/components/footer/footer.component';
import {WorkService} from "../../services/work.service";
import {WorkProject} from "../../models/work-project";


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

  projects: WorkProject[] = [];

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

  project: WorkProject | null = null;
  nextProject: WorkProject | null = null;

  constructor(route: ActivatedRoute, workService: WorkService) {
    workService.getAllWork().subscribe(projects => {
      this.projects = projects
      this.setProject(route.snapshot.paramMap.get('slug'))
    })
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
