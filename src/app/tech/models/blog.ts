import {Sections} from "./sections";
import {Author} from "./author";
import {Category} from "./category";
import {Tags} from "./tags";

export interface Blog {
  id: string;
  slug: string;
  category: Category | null;
  title: string;
  excerpt: string;
  status: string;
  author: Author;
  featured_image: string | null;
  readingTime: number;
  tags: Tags[] | null;
  sections?: Sections[] | null;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
