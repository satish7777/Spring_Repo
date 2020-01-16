import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;
  constructor(private routerservice:RouterService){

  }
  switchToListView(){
    this.isNoteView = true;
    this.routerservice.routeToListView();
  }
  switchToNoteView(){
    this.isNoteView = false;
    this.routerservice.routeToNoteView();

  }
  logoutUser() {
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('userId');
    this.routerservice.routeToLogin();
  }
  getStatus(){
    if(localStorage.getItem("userId")!==null){
      return false
    }
    else{
      return true;
    }
  
  }
}
