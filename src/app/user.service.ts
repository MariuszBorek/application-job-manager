import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Login } from './Login';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'https://jm-backend.herokuapp.com/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  LogInUser(login: Login): Observable<User> {
    const url = `${this.usersUrl}/login`;
    return this.http.post<User>(this.usersUrl, login, this.httpOptions);
  }

}
