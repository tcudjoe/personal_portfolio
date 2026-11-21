import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {WorkProject} from "../../models/work-project";
import {DirectusService} from "../../services/directus.service";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  activeCategory = 'All';
  projects: WorkProject[] = [];
  featuredProject: WorkProject | null = null;
  isLoaded = false;

  constructor(private readonly directusService: DirectusService) {
    directusService.getAllProjects().subscribe(projects => {
      this.featuredProject = projects[0] ?? null;
      this.projects = projects.slice(1);
      this.isLoaded = true;
    });
  }

  setFilter(category: string): void {
    this.activeCategory = category;
  }

  get categories(): string[] {
    return ['All', ...new Set(
      [
        this.featuredProject?.category?.name,
        ...this.projects.map(project => project.category?.name)
      ].filter((category): category is string => Boolean(category) && category !== 'All')
    )];
  }

  get filteredProjects(): WorkProject[] {
    return this.activeCategory === 'All'
      ? this.projects
      : this.projects.filter(
        project => project.category?.name === this.activeCategory
      );
  }

  get visibleFeaturedProject(): WorkProject | null {
    if (!this.featuredProject) {
      return null;
    }

    return this.activeCategory === 'All' || this.featuredProject.category?.name === this.activeCategory
      ? this.featuredProject
      : null;
  }

  getAssetUrl(fileId: string | undefined): string {
    return `${environment.api_url}/assets/${fileId}`;
  }
}
