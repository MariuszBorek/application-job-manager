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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/create`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  addProject(username: string, password: string, id: number, project: Project): Observable<User> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
    const url = `${this.usersUrl}/users/projects/${id}`;
    return this.http.post<User>(url, project, { headers });
  }
}
