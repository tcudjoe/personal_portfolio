export interface Author {
  id: string;
  name: string;
  description: string;
  image: string;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
