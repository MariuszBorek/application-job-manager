import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksUrl = 'http://localhost:8080/api/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/update`;
    return this.http.put<Task>(url, task, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getArchiveTasks(): Observable<Task[]> {
    const url = `${this.tasksUrl}/archive`;
    return this.http.get<Task[]>(url);
  }

  deleteFinishedTasks(tasks: Task[]): Observable<Task[]> {
    const url = `${this.tasksUrl}/finished`;
    return this.http.post<Task[]>(url, tasks, this.httpOptions);

  }

}
