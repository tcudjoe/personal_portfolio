import {Blog} from "./blog";
import {ArticleSection} from "./article-section";
import {ProjectMeta} from "./project-meta";
import {WorkProject} from "./work-project";
import {ExperienceItem} from "./experience-item";
import {BlockImage} from "./block-image";
import {BlockText} from "./block-text";
import {BlockCode} from "./block-code";
import {Author} from "./author";
import {Category} from "./category";
import {Tags} from "./tags";

export interface Schema {
  blog: Blog[],
  article_section: ArticleSection[],
  metadata: ProjectMeta[],
  project: WorkProject[],
  experience: ExperienceItem[],
  block_image: BlockImage[];
  block_text: BlockText[];
  block_code: BlockCode[];
  author: Author[];
  category: Category[];
  tags: Tags[];
}
