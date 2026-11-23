export interface ExperienceItem {
  id: string;
  start_date: string;
  end_date: string | null;
  title: string;
  organisation: string;
  description: string;
  status: string;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
