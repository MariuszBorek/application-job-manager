import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'http://localhost:8080/api/users/projects/notes';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getNotes(username: string, password: string, userId: number, projectId: number): Observable<Note[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), reposnseType: 'json' });
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.get<Note[]>(url, { headers });
  }

  addNote(username: string, password: string, userId: number, projectId: number, note: Note): Observable<Note> {
    const headers = this.baseAuth(username, password);
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.post<Note>(url, note,  { headers });
  }

  updateNote(username: string, password: string, userId: number, projectId: number, note: Note): Observable<Note> {
    const headers = this.baseAuth(username, password);
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.put<Note>(url, note, { headers });
  }

  deleteNote(username: string, password: string, userId: number, projectId: number, note: Note): Observable<Note> {
    const headers = this.baseAuth(username, password);
    const url = `${this.notesUrl}/${userId}/${projectId}/${note.id}`;
    return this.http.delete<Note>(url,  { headers });
  }

  private baseAuth(username: string, password: string): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), 'Content-Type': 'application/json' });
  }


}
