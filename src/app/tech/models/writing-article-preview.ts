export interface WritingArticlePreview {
  slug: string;
  category: 'Architecture' | 'Engineering' | 'Build Logs';
  title: string;
  description: string;
  date: string;
  readTime: number;
}
