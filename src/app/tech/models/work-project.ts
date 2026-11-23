import {Category} from "./category";
import {ProjectMetadataRelation} from "./project-metadata-relation";
import {TechnologyRelation} from "./technology-relation";
import {BlockCarousel} from "./block-carousel";
import {Sections} from "./sections";

export interface WorkProject {
  id: string;
  featured_image: string;
  slug: string;
  title: string;
  category: Category | null;
  start_date: string;
  end_date: string | null;
  excerpt: string;
  sections: (Sections | { collection: 'block_carousel'; item: BlockCarousel })[];
  technology: TechnologyRelation[] | null;
  metadata: ProjectMetadataRelation[] | null;
  status: string;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
