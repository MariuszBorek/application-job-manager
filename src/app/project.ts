import { Task } from './task';
import { Sheet } from './sheet';
import { Note } from './note';
import { TaskArchive } from './task-archive';
import { Scupper } from './scupper';

export interface Project {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
  taskarchive: TaskArchive[];
  sheets: Sheet[];
  notes: Note[];
  scuppers: Scupper[];
}
