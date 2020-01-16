import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  errMessage: string;
  note: Note;
  notes = [];
  constructor(private noteservice: NotesService) {
    this.note = new Note();
    this.notes = [];

  }
  ngOnInit() 
  {
    
    // this.noteservice.getNotes().subscribe(notedataList=>{
    //   this.notes=notedataList;
    // },
    // err=>{
    //   this.errMessage=err.message;
    //   //console.log("Error");
    // })
  }
  // ngOnDestroy(){
  //   this.router.routeBack();
  // }

  addNote() {
    if(this.note.noteTitle==null || this.note.noteTitle==null || this.note.noteTitle=='' || this.note.noteTitle==''){
      this.errMessage="Mandatory Fields are missing";
    }else{
   // this.notes.push(this.note);
    this.noteservice.addNote(this.note).subscribe(data => {
    },
      err => {
        // if(err.status===404){
        //   this.errMessage=err.message;
          
        // }else {
        this.errMessage=err.message;
        //}
        //this.errMessage="Title and Text both are required fields";
      })
    this.note = new Note();
    }
  }


}
