export interface BlockCarousel {
  id: string;
  media: { directus_files_id: { id: string; type: string | null; title: string | null } | null }[] | null;
  archived: boolean;
  date_created: string;
  date_updated: string | null;
}
