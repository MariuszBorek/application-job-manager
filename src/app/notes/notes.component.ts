import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  choosenProject: string;

  selectedNote: Note = {
    id: null,
    text: ''
  };

  constructor(private noteService: NoteService) { }

  getProjectIfChoosen() {
    this.choosenProject = localStorage.getItem('project');
}

  checkIfNotesExist(): boolean {
    if(this.notes.length === 0) {
      return false;
    }
    return true;
  }

  getNotes(): void {
    if (this.choosenProject) {
      this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
    }
  }


  addNote(): void {
    if (this.choosenProject) {
      const newNote: Note = {
        id: null,
        text: 'Click on a note and edit'
      };
      this.noteService.addNote(newNote)
        .subscribe(note => this.notes.push(note));

    } else {
      alert('First select the project for which you want to create a new note.');
    }
  }

  saveNote(note: Note): void {
    if (this.choosenProject) {
      const newNote: Note = {
        id: note.id,
        text: note.text
      };
      this.noteService.updateNote(newNote)
        .subscribe();
    }
  }

  deleteNote(note: Note): void {
    if (this.choosenProject && confirm('Are you sure you want to delete this note?')) {
      this.notes = this.notes.filter(n => n !== note);
      this.noteService.deleteNote(note).subscribe();
    }
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  // getLastNote(): Note {
  //   const note = this.notes[this.notes.length];
  //   return note;
  // }

  ngOnInit(): void {
    this.getNotes();
    this.getProjectIfChoosen();
  }

}
