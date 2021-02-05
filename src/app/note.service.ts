import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'https://jm-backend.herokuapp.com/api/users/projects/notes';

  constructor(private http: HttpClient) { }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectId(): string {
    return localStorage.getItem('project');
  }

  getNotes(): Observable<Note[]> {
    const url = `${this.notesUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.get<Note[]>(url);
  }


  addNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.post<Note>(url, note);
  }

  updateNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${this.getUserEmail()}/${this.getProjectId()}`;
    return this.http.put<Note>(url, note);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${this.getUserEmail()}/${this.getProjectId()}/${note.id}`;
    return this.http.delete<Note>(url);
  }

}
