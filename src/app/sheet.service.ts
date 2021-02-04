import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private sheetsUrl = 'https://jm-backend.herokuapp.com/api/users/projects/sheets';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getSheets(username: string, password: string, userId: number, projectId: number): Observable<Sheet[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.get<Sheet[]>(url, { headers });
  }

  addSheet(username: string, password: string, userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const headers = this.baseAuth(username, password);
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.post<Sheet>(url, sheet, { headers });
  }

  updateSheet(username: string, password: string, userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const headers = this.baseAuth(username, password);
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.put<Sheet>(url, sheet, { headers });
  }

  deleteSheet(username: string, password: string, userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const headers = this.baseAuth(username, password);
    const url = `${this.sheetsUrl}/${userId}/${projectId}/${sheet.id}`;
    return this.http.delete<Sheet>(url, { headers });
  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }

}
