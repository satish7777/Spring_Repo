import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { RouterService } from '../services/router.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {


  @Input()
  note:Note;

  constructor(private routerservice:RouterService,private noteService:NotesService) 
  { 

  }

  ngOnInit() 
  {

  }
 
  openEditNoteView()
  {
   // console.log("openEditNoteView" + this.note.noteId);    
    this.routerservice.routeToEditNoteView(this.note.noteId);    
  }

  deleteNote() {
    console.log(this.note.noteId);
    
    this.noteService.deleteNote(this.note.noteId).subscribe(response => {
      this.noteService.fetchNotesFromServer();
    })
  }
}
