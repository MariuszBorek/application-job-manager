import { Project } from './project';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  projects: Project[];
}
