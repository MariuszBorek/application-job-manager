import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';
import { TaskArchive } from '../task-archive';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];
  archivedTasks: TaskArchive[] = [];
  isHisotryTaskShown = false;
  choosenProject: string;

  constructor(private todoService: TodoService) { }

  getProjectIfChoosen() {
    this.choosenProject = localStorage.getItem('project');
  }

  checkIfTasksExist(): boolean {
    if (this.tasks.length === 0) {
      return false;
    }
    return true;
  }

  getTasks(): void {
    this.todoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }


  addRow(): void {
    if (this.choosenProject) {
    const newTask: Task = {
      id: null,
      topic: '',
      text: '',
      date: null,
      priority: false,
      execution: false
    };
    this.todoService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
      });
    } else {
      alert('First select the project for which you want to create a new task.');
    }
  }

  addTask(task: Task): void {
    if (this.choosenProject) {
    const newTask: Task = {
      id: task.id,
      topic: task.topic,
      text: task.text,
      date: task.date,
      priority: task.priority,
      execution: task.execution
    };
    this.todoService.updateTask(newTask)
      .subscribe();
    }
  }

  deleteTask(task: Task): void {
    if (confirm('Are you sure you want to delete this sheet?')) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.todoService.deleteTask(task).subscribe();
    }
  }

  archiveTasks(): void {
    if (confirm('Are you sure you want to archived finished tasks?')) {
    this.todoService.archiveTasks(this.tasks)
      .subscribe(archivedTasks => this.archivedTasks = archivedTasks);
    this.clearfinishedTasks();
    }
  }

  clearfinishedTasks(): void {
    const tasksToDelete: Task[] = [];
    if (confirm('Are you sure you want to clear finished tasks?')) {
      this.tasks.forEach(task => {
        if (task.execution === true) {
          tasksToDelete.push(task);
        }
      });
      this.todoService.deleteFinishedTasks(tasksToDelete)
        .subscribe(tasks => this.tasks = tasks);
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
    this.getTasks();
    this.getProjectIfChoosen();
  }
}
