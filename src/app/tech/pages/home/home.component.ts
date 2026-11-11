import {Component} from '@angular/core';
import {WorkProject} from "../../models/work-project";
import {WritingArticle} from "../../models/writing-article";
import {WorkService} from "../../services/work.service";
import {ArticleServiceService} from "../../services/article-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homeArticles: WritingArticle[] = [];
  featuredProject: WorkProject | null = null;

  readonly aboutImages = [
    {label: 'Music performance photo placeholder', variant: 'performance'},
    {label: 'Guitar photo placeholder', variant: 'guitar'},
    {label: 'Portrait photo placeholder', variant: 'portrait'},
    {label: 'Studio portrait placeholder', variant: 'studio'}
  ];

  projects: WorkProject[] = [];

  constructor(private readonly workService: WorkService, private readonly articleService: ArticleServiceService) {
    workService.getAllWork().subscribe(projects => {
      this.featuredProject = projects[0] ?? null;
      this.projects = projects.slice(1, 3);
    })

    articleService.getArticles().subscribe(articles => {
      this.homeArticles = articles;
    })
  }
}
