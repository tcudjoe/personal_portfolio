import {ArticleSection} from "./article-section";

export interface WritingArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  sections?: ArticleSection[];
}
