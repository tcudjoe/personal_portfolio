import {ProjectMeta} from "./project-meta";

export type WorkFilter = 'All Work' | 'Client Work' | 'Personal' | 'Career';

export interface WorkProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  start_date: string;
  end_date: string | null;
  excerpt: string;
  technologies: string[];
  metadata: ProjectMeta[];
  scope: Exclude<WorkFilter, 'All Work'>;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
