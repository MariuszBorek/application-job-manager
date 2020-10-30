import { Task } from './task';
import { Sheet } from './sheet';
import { Note } from './note';

export interface Project {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
  sheets: Sheet[];
  notes: Note[];
}
