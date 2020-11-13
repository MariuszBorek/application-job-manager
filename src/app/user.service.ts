import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Login } from './login';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  LogInUser(login: Login): Observable<User> {
    const url = `${this.usersUrl}/login`;
    return this.http.post<User>(this.usersUrl, login, this.httpOptions);
  }

  // getTasks(userId: number, projectId: number): Observable<Task[]> {
  //   const url = `${this.usersUrl}/project/task/${userId}/${projectId}`;
  //   return this.http.get<Task[]>(url);
  // }

  // addTask(userId: number, projectId: number, task: Task): Observable<Task> {
  //   const url = `${this.usersUrl}/project/task/${userId}/${projectId}`;
  //   return this.http.post<Task>(url, task, this.httpOptions);
  // }

  // updateTask(userId: number, projectId: number, task: Task): Observable<Task> {
  //   const url = `${this.usersUrl}/project/task/${userId}/${projectId}`;
  //   return this.http.put<Task>(url, task, this.httpOptions);
  // }

  // deleteTask(userId: number, projectId: number, task: Task): Observable<Task> {
  //   const url = `${this.usersUrl}/project/task/${userId}/${projectId}/${task.id}`;
  //   return this.http.delete<Task>(url, this.httpOptions);
  // }


}
