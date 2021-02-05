import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class UserCreatorService {

  private usersUrl = 'https://jm-backend.herokuapp.com/api';
  // private usersUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  wakeUpServer(): Observable<string> {
    const url = `${this.usersUrl}/wake-up`;
    return this.http.get<string>(url);
  }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/create`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  addProject(project: Project): Observable<User> {
    const url = `${this.usersUrl}/users/projects/${this.getUserEmail()}`;
    return this.http.post<User>(url, project);
  }
}
