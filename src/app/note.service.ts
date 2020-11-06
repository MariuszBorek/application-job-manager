import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'http://localhost:8080/api/notes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, this.httpOptions);
  }

  updateNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/update`;
    return this.http.put<Note>(url, note, this.httpOptions);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }


}
