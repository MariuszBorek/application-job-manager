import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'http://localhost:8080/api/users/projects/notes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNotes(userId: number, projectId: number): Observable<Note[]> {
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.get<Note[]>(url);
  }

  addNote(userId: number, projectId: number, note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.post<Note>(url, note, this.httpOptions);
  }

  updateNote(userId: number, projectId: number, note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${userId}/${projectId}`;
    return this.http.put<Note>(url, note, this.httpOptions);
  }

  deleteNote(userId: number, projectId: number, note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${userId}/${projectId}/${note.id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }


}
