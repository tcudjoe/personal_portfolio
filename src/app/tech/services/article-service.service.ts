import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {WritingArticle} from "../models/writing-article";

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private httpClient:HttpClient) { }

  getArticles(): Observable<WritingArticle[]>{
    return this.httpClient.get<WritingArticle[]>('/assets/seedData/WritingArticleSeedData.json')
  }

  getArticleBySlug(slug: string): Observable<WritingArticle | undefined> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.slug === slug))
    );
  }
}
