import {ProjectMeta} from "./project-meta";

export interface WorkProjectDetail {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  technologies: string[];
  metadata: ProjectMeta[];
}
