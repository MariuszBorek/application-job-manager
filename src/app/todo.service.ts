import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { TaskArchive } from './task-archive';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksUrl = 'http://localhost:8080/api/users/projects/tasks';

  constructor(private http: HttpClient) { }

  getTasks(username: string, password: string, userId: number, projectId: number): Observable<Task[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.get<Task[]>(url, { headers });
  }

  addTask(username: string, password: string, userId: number, projectId: number, task: Task): Observable<Task> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.post<Task>(url, task, { headers });
  }

  updateTask(username: string, password: string, userId: number, projectId: number, task: Task): Observable<Task> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/${userId}/${projectId}`;
    return this.http.put<Task>(url, task, { headers });
  }

  deleteTask(username: string, password: string, userId: number, projectId: number, task: Task): Observable<Task> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/${userId}/${projectId}/${task.id}`;
    return this.http.delete<Task>(url, { headers });
  }

  archiveTasks(username: string, password: string, userId: number, projectId: number, tasks: Task[]): Observable<TaskArchive[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/archive/${userId}/${projectId}`;
    return this.http.post<Task[]>(url, tasks, { headers });
  }

  deleteFinishedTasks(username: string, password: string, userId: number, projectId: number, tasks: Task[]): Observable<Task[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.tasksUrl}/finished/${userId}/${projectId}`;
    return this.http.post<Task[]>(url, tasks, { headers });

  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }

}
