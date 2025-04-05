export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export interface Contents {
  metadata: Metadata;
  slug: string;
  content: string;
}
