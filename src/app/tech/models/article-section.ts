export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  decisionRecord?: {
    label: string;
    title: string;
    flow: string;
  };
}
