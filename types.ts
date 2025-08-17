export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}