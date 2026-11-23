import {Component} from '@angular/core';
import {WorkProject} from "../../models/work-project";
import {Blog} from "../../models/blog";
import {WorkService} from "../../services/work.service";
import {ArticleServiceService} from "../../services/article-service.service";
import {DirectusService} from "../../services/directus.service";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homeArticles: Blog[] = [];
  featuredProject: WorkProject | null = null;

  readonly aboutImages = [
    'assets/img/DJI_0152.jpg',
    'assets/img/378121626_17995220060507392_2674928163483874025_n.JPG',
    'assets/img/IMG_2835.WEBP',
    'assets/img/IMG_1642.jpg'
  ];

  projects: WorkProject[] = [];

  constructor(private directusService: DirectusService) {
    directusService.getAllProjects().subscribe(projects => {
      this.featuredProject = projects[0] ?? null;
      this.projects = projects.slice(1, 3);
    })

    directusService.getAllBlogs().subscribe(articles => {
      this.homeArticles = articles.slice(0, 4);
    })
  }

  getAssetUrl(fileId: string | undefined): string {
    return `${environment.api_url}/assets/${fileId}`;
  }
}
