import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksUrl = 'http://localhost:8080/api/users/projects/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTasks(userId: number, projectId: number): Observable<Task[]> {
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.get<Task[]>(url);
  }

  addTask(userId: number, projectId: number, task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.post<Task>(url, task, this.httpOptions);
  }

  updateTask(userId: number, projectId: number, task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.put<Task>(url, task, this.httpOptions);
  }

  deleteTask(userId: number, projectId: number, task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${userId}/${projectId}/${task.id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getArchiveTasks(userId: number, projectId: number): Observable<Task[]> {
    const url = `${this.tasksUrl}/archive/${userId}/${projectId}`;
    return this.http.get<Task[]>(url);
  }

  deleteFinishedTasks(userId: number, projectId: number, tasks: Task[]): Observable<Task[]> {
    const url = `${this.tasksUrl}/finished/${userId}/${projectId}`;
    return this.http.post<Task[]>(url, tasks, this.httpOptions);

  }

}
