import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {WorkFilter, WorkProject} from "../../models/work-project";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  readonly filters: WorkFilter[] = ['All Work', 'Client Work', 'Personal'];
  activeFilter: WorkFilter = 'All Work';

  readonly featuredProject: WorkProject = {
    slug: 'compliance-management-platform',
    category: 'Client work · Hibera',
    title: 'Compliance Management Platform',
    description: 'Designing and developing a platform to make compliance workflows easier to manage.',
    scope: 'Client Work'
  };

  readonly projects: WorkProject[] = [
    {
      slug: 'my-homelab',
      category: 'Personal · Infrastructure',
      title: 'My Homelab',
      scope: 'Personal'
    },
    {
      slug: 'monitoring-platform',
      category: 'Personal · Building in public',
      title: 'Monitoring Platform',
      scope: 'Personal'
    },
    {
      slug: 'personal-portfolio',
      category: 'Personal · Web development',
      title: 'Personal Portfolio',
      scope: 'Personal'
    }
  ];

  setFilter(filter: WorkFilter): void {
    this.activeFilter = filter;
  }

  get showFeaturedProject(): boolean {
    return this.activeFilter === 'All Work' || this.activeFilter === this.featuredProject.scope;
  }

  get filteredProjects(): WorkProject[] {
    return this.activeFilter === 'All Work'
      ? this.projects
      : this.projects.filter((project) => project.scope === this.activeFilter);
  }
}
