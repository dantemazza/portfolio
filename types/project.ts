export interface Project {
  id: string;
  title: string;
  slug: string;
  period: string;
  shortDescription: string;
  fullDescription: string[];
  role: string;
  collaborator?: {
    name: string;
    github: string;
  };
  highlights: string[];
  images: string[];
  liveUrl?: string;
}
