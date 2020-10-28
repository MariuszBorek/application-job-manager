import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  private sheetsUrl = 'http://localhost:8080/api/sheets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSheets(): Observable<Sheet[]> {
    return this.http.get<Sheet[]>(this.sheetsUrl);
  }

  addSheet(sheet: Sheet): Observable<Sheet> {
    return this.http.post<Sheet>(this.sheetsUrl, sheet, this.httpOptions);
  }

  updateSheet(sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/update`;
    return this.http.put<Sheet>(url, sheet, this.httpOptions);
  }

  deleteSheet(sheet: Sheet): Observable<Sheet> {
    const url = `${this.sheetsUrl}/${sheet.id}`;
    return this.http.delete<Sheet>(url, this.httpOptions);
  }

}
