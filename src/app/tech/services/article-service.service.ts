import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Blog} from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private readonly httpClient:HttpClient) { }

  getArticles(): Observable<Blog[]>{
    return this.httpClient.get<Blog[]>('/assets/seedData/WritingArticleSeedData.json')
  }

  getArticleBySlug(slug: string): Observable<Blog | undefined> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.slug === slug))
    );
  }
}
