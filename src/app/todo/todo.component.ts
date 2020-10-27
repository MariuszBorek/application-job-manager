import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];
  archivedTasks: Task[] = [];
  isHisotryTaskShown = false;


  constructor(private todoService: TodoService) { }

  getSize(): number {
    return this.tasks.length;
  }

  getTasks(): void {
    this.todoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }


  addRow(): void {
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
  }

  addTask(task: Task): void {
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

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.todoService.deleteTask(task).subscribe();
  }

  archiveTasks(): void {
    this.todoService.getArchiveTasks()
      .subscribe(tasks => this.archivedTasks = tasks);
  }

  clearfinishedTasks(): void {
    if (confirm('Are you sure you want to clear finished tasks?')) {
      const tasksToDelete: Task[] = [];
      this.tasks.forEach(task => {
        if (task.execution === true) {
          tasksToDelete.push(task);
        }
      });
      this.todoService.deleteFinishedTasks(tasksToDelete).subscribe();
      this.getTasks();
    }
  }

  // --------------------------------------------------------

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


  // clearfinishedTasks(): void {
  //   if (confirm('Are you sure you want to clear finished tasks?')) {
  //     const newTasks = this.tasks.filter((element) => {
  //       return element.execution === false;
  //     });
  //     this.tasks = newTasks;
  //   }
  // }

  // archiveTasks(): void {
  //   if (confirm('Are you sure you want to archive finished tasks?')) {
  //     const newTasks = this.tasks.filter((element) => {
  //       return element.execution === true;
  //     });
  //     for (let i = 0; i < newTasks.length; i++) {
  //       this.archivedTasks.push(newTasks[i]);
  //     }
  //     this.clearfinishedTasks();
  //   }
  // }

  showHistory(): void {
    if (!this.isHisotryTaskShown) {
      this.isHisotryTaskShown = true;
    } else {
      this.isHisotryTaskShown = false;
    }
  }


  ngOnInit(): void {
    this.getTasks();
  }

}
