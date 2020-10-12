import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  selectedNote: Note = {
    id: 0,
    topic: '',
    text: ''
  };

  constructor() { }

  getMaxId(): number {
    if (!this.notes.length) {
      return 0;
    }
    const ids = this.notes.map(note => note.id);
    const maxId = Math.max(...ids);
    return maxId;
  }

  incrementId(): number {
    const id = this.getMaxId() + 1;
    const sortedId = this.notes.sort();
    return id;
  }

  addNote(): void {
    const newNote: Note = {
      id: this.incrementId(),
      topic: '',
      text: ''
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
  }

  deleteNote(noteToDelete: Note): void {
    if (confirm('Are you sure you want to delete this note?')) {
      const idToDelete = noteToDelete.id;
      const newNotes = this.notes.filter((element) => {
        return idToDelete !== element.id;
      });
      this.notes = newNotes;
    }
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  ngOnInit(): void {
    this.addNote();
  }

}
