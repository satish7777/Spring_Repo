import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit{

  notes: Array<Note>;

  constructor(private noteservice: NotesService) {
    this.notes = [];
  }
  ngOnInit() {
    //console.log("note view component");
    this.noteservice.getNotes().subscribe(notedataList => {
      this.notes = notedataList;
    },
      err => {
        console.log("Error");
      })
  }
}
