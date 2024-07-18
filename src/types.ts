interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export type { Project, LoginParams }