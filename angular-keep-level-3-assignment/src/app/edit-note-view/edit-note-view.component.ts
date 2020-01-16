import { Component, Inject } from '@angular/core';
import { Note } from '../note';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../services/notes.service';
import { RouterService } from '../services/router.service';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent {
  note: Note;
  status: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;
  constructor(
    private dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NotesService,
    private routerservice: RouterService
  ) {
    this.note = new Note();
    //this.note = this.noteservice.getNoteById(this.data.noteId);

    // console.log(this.note);
  }

  // onSave() {
  //   let note:Note = new Note();
  //   note.id=this.note.id;
  //   note.title=mynoteForm.value.editTitle;
  //   note.text=mynoteForm.value.editText;
  //   note.state=mynoteForm.status;

  //   console.log("Form Data" + mynoteForm.value.editTitle);

  //   console.log(note);

  //   this.noteservice.editNote(note).subscribe(
  //     data=>{},
  //     err=>{}
  //   )
  //   this.dialogRef.close();
  // }
  ngOnInit(){
   // console.log(this.data.noteId +" is the note")
   this.note = this.noteservice.getNoteById(this.data.noteId);
  }

  onSave() {
    this.noteservice.editNote(this.note).subscribe(data => {
     this.noteservice.getNotes();
      this.dialogRef.close();


    }, err => {
      this.errMessage = err.message;

    });
    this.dialogRef.close();
  }

}
