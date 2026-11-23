import {Component} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {combineLatest} from 'rxjs';
import {FooterConfig} from '../../../shared/components/footer/footer.component';
import {WorkProject} from "../../models/work-project";
import {DirectusService} from "../../services/directus.service";
import {SharedService} from "../../services/shared.service";
import {environment} from '../../../../environments/environment';

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

  project: WorkProject | null = null;
  nextProject: WorkProject | null = null;

  constructor(route: ActivatedRoute, directusService: DirectusService) {
    combineLatest([route.paramMap, directusService.getAllProjects()])
      .pipe(takeUntilDestroyed())
      .subscribe(([params, projects]) => {
        this.projects = projects;
        this.setProject(params.get('slug'));
      });
  }

  getMetadataUrl(value: string | null | undefined): string | null {
    const text = value?.trim();
    if (!text || !/^https?:\/\/\S+$/i.test(text)) return null;

    try {
      return new URL(text).href;
    } catch {
      return null;
    }
  }

  getAssetUrl(fileId: string): string {
    return `${environment.api_url}/assets/${fileId}`;
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

  protected readonly SharedService = SharedService;
}
