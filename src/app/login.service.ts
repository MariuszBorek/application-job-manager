import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // loginUrl = 'http://localhost:8080/api/users';
  loginUrl = 'https://jm-backend.herokuapp.com/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  LogInUser(username: string, password: string): Observable<User> {
    const headers = this.baseAuth(username, password);
    const url = `${this.loginUrl}/login/${username}/${password}`;
    return this.http.get<User>(url, { headers, responseType: 'json' });
  }

  LogOutUser(): Observable<any> {
    const url = `http://localhost:8080/logout`;
    return this.http.get<any>(url);
  }

  getProjects(username: string, password: string, id: number): Observable<Project[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.loginUrl}/projects/${id}`;
    return this.http.get<Project[]>(url, { headers, responseType: 'json' });
  }

  deleteProject(username: string, password: string, projectId: number): Observable<Project[]> {
    const headers = this.baseAuth(username, password);
    const url = `${this.loginUrl}/projects/${projectId}`;
    return this.http.delete<Project[]>(url, {headers});
  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }

}
