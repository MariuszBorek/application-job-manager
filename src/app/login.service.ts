import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private loginUrl = 'https://jm-backend.herokuapp.com/api/users';
  private loginUrl = 'http://localhost:8080/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }


  LogInUser(username: string, password: string): Observable<User> {
    const headers = this.baseAuth(username, password);
    const url = `${this.loginUrl}/login/${username}/${password}`;
    return this.http.get<User>(url, { headers, responseType: 'json' });
  }

  LogOutUser(): Observable<any> {
    const url = `https://jm-backend.herokuapp.com/logout`;
    return this.http.get<any>(url);
  }

  getProjects(): Observable<Project[]> {
    const url = `${this.loginUrl}/projects/${this.getUserEmail()}`;
    return this.http.get<Project[]>(url);
  }

  deleteProject(projectId: number): Observable<Project[]> {
    const url = `${this.loginUrl}/projects/${projectId}`;
    return this.http.delete<Project[]>(url);
  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }

}
