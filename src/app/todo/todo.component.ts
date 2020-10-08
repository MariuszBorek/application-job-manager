import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  getMaxId(): number {
    if (!this.tasks.length) {
      return 0;
    }
    const ids = this.tasks.map(task => task.id);
    const maxId = Math.max(...ids);
    return maxId;
  }

  incrementId(): number {
    const id = this.getMaxId() + 1;
    const sortedId = this.tasks.sort();
    return id;
  }

  addTask(): void {
    const newTask: Task = {
      id: this.incrementId(),
      topic: '',
      text: '',
      date: new Date(),
      priority: false,
      execution: false
    };
    this.tasks.push(newTask);
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

  setExecution(task: Task): boolean  {
    if (task.execution === false) {
      task.execution = true;
      console.log(task.execution);
      return true;
    } else {
      task.execution = false;
      return false;
    }
  }

  changeColor(isTrue: boolean): boolean {
    return isTrue;
  }


  deleteTask(taskToDelete: Task): void {
    if (confirm('Are you sure you want to delete this task?')){
      const idToDelete = taskToDelete.id;
      const newTasks = this.tasks.filter((element) => {
        return idToDelete !== element.id;
      });
      this.tasks = newTasks;
    }
  }


  ngOnInit(): void {
    this.addTask();
  }

}
