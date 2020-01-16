import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent {
  //noteId:number;

  constructor(
    private dialog:MatDialog,
    private activatedroute:ActivatedRoute,
    private routerservice:RouterService
  ) 
  { 
   // this.activatedroute.params.subscribe(params=> this.noteId=params.noteid);
   const  noteId=this.activatedroute.snapshot.paramMap.get('noteid');
   console.log(noteId +" manshu")
    this.dialog.open(EditNoteViewComponent,{
      data:
      {
        noteId:noteId
      }
    }).afterClosed().subscribe(result=>{
      this.routerservice.routeToDashboard();
    })
  }

}
