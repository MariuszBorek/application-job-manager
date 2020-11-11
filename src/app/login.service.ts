import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:8080//api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  LogInUser(email: string, password: string): Observable<User> {
    const url = `${this.loginUrl}/login/${email}/${password}`;
    return this.http.get<User>(url, { responseType: 'json' });
  }




}
