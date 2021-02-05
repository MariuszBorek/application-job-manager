import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { TaskArchive } from './task-archive';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksUrl = 'https://jm-backend.herokuapp.com/api/users/projects/tasks';

  constructor(private http: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectId(): string {
    return localStorage.getItem('project');
  }

  getTasks(): Observable<Task[]> {
    const url = `${this.tasksUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.get<Task[]>(url);
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Task>(url, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${this.getUserEmail()}/${this.getProjectId()}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  archiveTasks(tasks: Task[]): Observable<TaskArchive[]> {
    const url = `${this.tasksUrl}/archive/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Task[]>(url, tasks);
  }

  deleteFinishedTasks(tasks: Task[]): Observable<Task[]> {
    const url = `${this.tasksUrl}/finished/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Task[]>(url, tasks);

  }


}
