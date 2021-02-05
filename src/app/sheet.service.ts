import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  // private sheetsUrl = 'https://jm-backend.herokuapp.com/api/users/projects/sheets';
  private sheetsUrl = 'http://localhost:8080/api/users/projects/sheets';


  constructor(private http: HttpClient) { }


  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectId(): string {
    return localStorage.getItem('project');
  }

  getSheets(): Observable<Sheet[]> {
    const url = `${this.sheetsUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.get<Sheet[]>(url);
  }

  addSheet(sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Sheet>(url, sheet);
  }

  updateSheet(sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.put<Sheet>(url, sheet);
  }

  deleteSheet(sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${this.getUserEmail()}/${this.getProjectId()}/${sheet.id}`;
    return this.http.delete<Sheet>(url);
  }

}
