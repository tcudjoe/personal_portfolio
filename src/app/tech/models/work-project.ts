export type WorkFilter = 'All Work' | 'Client Work' | 'Personal';

export interface WorkProject {
  slug: string;
  category: string;
  title: string;
  description?: string;
  scope: Exclude<WorkFilter, 'All Work'>;
}
