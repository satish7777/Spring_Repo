import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {
  constructor(private router:Router,private location:Location){

  }

  routeToDashboard() {
    //console.log("router service Inside");
    this.router.navigate(['dashboard']);
    //console.log("router service Done");
  }

  
  routeToLogin() {
    this.router.navigate(['login']);

  }
  routeToRegister() {    
    this.router.navigate(['register']);
  }

  routeToEditNoteView(noteId) {
    this.router.navigate(['dashboard',{
      outlets:{
        noteEditOutlet:['note',noteId,'edit']
      }
    }]);

  }

  routeBack() {
    this.location.back();
  }

  routeToNoteView() {
   // console.log("router service Inside");
  //this.router.navigate(['dashboard/view/listview']); 
   this.router.navigate(['dashboard/view/noteview']);
  }


 
  routeToListView() {
   //this.router.navigate(['dashboard/view/notesview']);
    this.router.navigate(['dashboard/view/listview']); 

   
  }
}
