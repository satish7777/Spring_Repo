import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit{

  notStartedNotes: Array<Note>;
  startedNotes: Array<Note>;
  completedNotes: Array<Note>;
  notes:Note[];

  constructor(private noteService:NotesService){
   
    this.notStartedNotes=[];
    this.startedNotes=[];
    this.completedNotes=[];
  }

ngOnInit() {
  
  this.noteService.getNotes().subscribe(notedataList => {
    //this.notes = notedataList;
    this.notStartedNotes=notedataList.filter((note)=>note.noteStatus==='not-started');
    this.startedNotes=notedataList.filter((note)=>note.noteStatus==='started');
    this.completedNotes=notedataList.filter((note)=>note.noteStatus==='completed');
  },
    err => {
      console.log("Error");
    })
}
}
