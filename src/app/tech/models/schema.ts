import {Blog} from "./blog";
import {Sections} from "./sections";
import {ProjectMeta} from "./project-meta";
import {WorkProject} from "./work-project";
import {ExperienceItem} from "./experience-item";
import {BlockImage} from "./block-image";
import {BlockText} from "./block-text";
import {BlockCode} from "./block-code";
import {Author} from "./author";
import {Category} from "./category";
import {Tags} from "./tags";
import {BlockCarousel} from "./block-carousel";

export interface Schema {
  blog: Blog[],
  article_section: Sections[],
  metadata: ProjectMeta[],
  projects: WorkProject[],
  experience: ExperienceItem[],
  block_image: BlockImage[];
  block_text: BlockText[];
  block_code: BlockCode[];
  block_carousel: BlockCarousel[];
  author: Author[];
  category: Category[];
  tags: Tags[];
}
