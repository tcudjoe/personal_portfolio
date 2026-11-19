export interface ExperienceItem {
  id: string;
  start_date: string;
  end_date: string | null;
  title: string;
  organization: string;
  description: string;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
