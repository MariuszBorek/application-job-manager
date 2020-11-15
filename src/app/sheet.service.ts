import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private sheetsUrl = 'http://localhost:8080/api/users/projects/sheets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSheets(userId: number, projectId: number): Observable<Sheet[]> {
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.get<Sheet[]>(url);
  }

  addSheet(userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.post<Sheet>(url, sheet, this.httpOptions);
  }

  updateSheet(userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${userId}/${projectId}`;
    return this.http.put<Sheet>(url, sheet, this.httpOptions);
  }

  deleteSheet(userId: number, projectId: number, sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${userId}/${projectId}/${sheet.id}`;
    return this.http.delete<Sheet>(url, this.httpOptions);
  }

}
