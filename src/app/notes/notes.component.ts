import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  note1: Note = {
    id: 1,
    topic: 'Hamownia',
    text: 'sprawdź drzwi miedzy hamownia a halą E'
  };

  note2: Note = {
    id: 2,
    topic: 'Dach bud B',
    text: 'sprawdź drzwi miedzy ...'
  };

  note3: Note = {
    id: 3,
    topic: 'Sufity',
    text: 'sprawdź drzwi miedzy hamownia a halą E'
  };

  notes: Note[] = [this.note1, this.note2, this.note3];

  constructor() { }

  ngOnInit(): void {
  }

}
