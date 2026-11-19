export interface Category {
  id: string;
  name: string;
  description: string;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
