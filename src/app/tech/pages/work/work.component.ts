import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {WorkFilter, WorkProject} from "../../models/work-project";
import {WorkService} from "../../services/work.service";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  readonly filters: WorkFilter[] = ['All Work', 'Client Work', 'Personal', 'Career'];
  activeFilter: WorkFilter = 'All Work';
  projects: WorkProject[] = [];
  featuredProject: WorkProject | null = null;
  isLoaded = false;

  constructor(private readonly workService: WorkService) {
    workService.getAllWork().subscribe(projects => {
      this.featuredProject = projects[0] ?? null;
      this.projects = projects.slice(1);
      this.isLoaded = true;
    });
  }

  setFilter(filter: WorkFilter): void {
    this.activeFilter = filter;
  }

  get filteredProjects(): WorkProject[] {
    return this.activeFilter === 'All Work'
      ? this.projects
      : this.projects.filter((project) => project.scope === this.activeFilter);
  }

  get visibleFeaturedProject(): WorkProject | null {
    if (!this.featuredProject) {
      return null;
    }

    return this.activeFilter === 'All Work' || this.featuredProject.scope === this.activeFilter
      ? this.featuredProject
      : null;
  }
}
