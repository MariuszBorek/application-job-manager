import { Component, OnInit } from '@angular/core';
import { copyFile } from 'fs';
import { Task } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];

  sampleTask = {
    id: 0,
    topic: '',
    text: '',
    date: new Date(),
    priority: true
  };


  constructor() { }

  incrementId(): number {
    const id = this.tasks.length + 1;
    return id;
  }


  addTask(): void {
    console.log();
    this.sampleTask.id = this.incrementId();
    const newTask: Task = {
      id: this.incrementId(),
      topic: '',
      text: '',
      date: new Date(),
      priority: true
    };
    this.tasks.push(newTask);
  }



  setPriority(task: Task): void {
    console.log('priority', task);
    if (task.priority === true) {
      task.priority = false;
    } else {
      task.priority = true;
    }
  }

  deleteTask(task: Task): void {

  }


  ngOnInit(): void {
  }

}
