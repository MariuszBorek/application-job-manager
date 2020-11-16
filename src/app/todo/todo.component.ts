import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';
import { User } from '../user';
import { Project } from '../project';
import { TaskArchive } from '../task-archive';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() user: User;
  @Input() project: Project;

  tasks: Task[] = [];
  archivedTasks: TaskArchive[] = [];
  isHisotryTaskShown = false;


  constructor(private todoService: TodoService) { }

  getTasks(): void {
    if (this.project) {
    this.todoService.getTasks(this.user.id, this.project.id)
      .subscribe(tasks => this.tasks = tasks);
    }
  }

  addRow(): void {
    if (this.project) {
    const newTask: Task = {
      id: null,
      topic: '',
      text: '',
      date: null,
      priority: false,
      execution: false
    };
    this.todoService.addTask(this.user.id, this.project.id, newTask)
      .subscribe(task => {
        this.tasks.push(task);
      });
    }
  }

  addTask(task: Task): void {
    if (this.project) {
      const newTask: Task = {
        id: task.id,
        topic: task.topic,
        text: task.text,
        date: task.date,
        priority: task.priority,
        execution: task.execution
      };
      this.todoService.updateTask(this.user.id, this.project.id, newTask)
        .subscribe();
    }
  }

  deleteTask(task: Task): void {
    if (this.project && confirm('Are you sure you want to delete this sheet?')) {
      this.tasks = this.tasks.filter(t => t !== task);
      this.todoService.deleteTask(this.user.id, this.project.id, task).subscribe();
    }
  }

  archiveTasks(): void {
    if (this.project && confirm('Are you sure you want to archived finished tasks?')) {
      this.todoService.archiveTasks(this.user.id, this.project.id, this.tasks)
        .subscribe(archivedTasks => this.archivedTasks = archivedTasks);
        this.clearfinishedTasks();
    }
  }

  clearfinishedTasks(): void {
    const tasksToDelete: Task[] = [];
    if (this.project) {
      if (confirm('Are you sure you want to clear finished tasks?')) {
        this.tasks.forEach(task => {
          if (task.execution === true) {
            tasksToDelete.push(task);
          }
        });
        this.todoService.deleteFinishedTasks(this.user.id, this.project.id, tasksToDelete).subscribe(tasks => this.tasks = tasks);
      }
    }
  }


  setPriority(task: Task): boolean {
    if (task.priority === false) {
      task.priority = true;

      return true;
    } else {
      task.priority = false;
      return false;
    }
  }

  setExecution(task: Task): boolean {
    if (task.execution === false) {
      task.execution = true;
      return true;
    } else {
      task.execution = false;
      return false;
    }
  }

  changeColor(isTrue: boolean): boolean {
    return isTrue;
  }

  showHistory(): void {
    if (!this.isHisotryTaskShown) {
      this.isHisotryTaskShown = true;
    } else {
      this.isHisotryTaskShown = false;
    }
  }

  sortByUnfinished(): void {
    const sortedTasks = this.tasks.sort((e1, e2) => {
      if (e1.execution > e2.execution) {
        return 1;
      }
      if (e1.execution < e2.execution) {
        return -1;
      }
    });
    this.tasks = sortedTasks;
  }

  sortByNo(): void {
    const sortedTasks = this.tasks.sort((e1, e2) => {
      if (e1.id > e2.id) {
        return 1;
      }
      if (e1.id < e2.id) {
        return -1;
      }
    });
    this.tasks = sortedTasks;
  }

  sortByOldest(): void {
    const sortedTasks = this.tasks.sort((e1, e2) => {
      if (e1.date > e2.date) {
        return 1;
      }
      if (e1.date < e2.date) {
        return -1;
      }
    });
    this.tasks = sortedTasks;
  }

  sortByNewest(): void {
    const sortedTasks = this.tasks.sort((e1, e2) => {
      if (e1.date > e2.date) {
        return -1;
      }
      if (e1.date < e2.date) {
        return 1;
      }
    });
    this.tasks = sortedTasks;
  }

  sortByPriority(): void {
    const sortedTasks = this.tasks.sort((e1, e2) => {
      if (e1.priority > e2.priority) {
        return -1;
      }
      if (e1.priority < e2.priority) {
        return 1;
      }
    });
    this.tasks = sortedTasks;
  }

  ngOnInit(): void {
    if (this.project) {
      this.getTasks();
    }
  }
}
