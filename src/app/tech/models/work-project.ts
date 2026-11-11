import {ProjectMeta} from "./project-meta";

export type WorkFilter = 'All Work' | 'Client Work' | 'Personal' | 'Career';

export interface WorkProject {
  slug: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  technologies: string[];
  metadata: ProjectMeta[];
  scope: Exclude<WorkFilter, 'All Work'>;
}
