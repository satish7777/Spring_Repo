import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterService } from './services/router.service';
import { NotesService } from './services/notes.service';
import { UserService } from './services/user.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { NoteComponent } from './note/note.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { MatSelectModule } from '@angular/material/select';
import { ListViewComponent } from './list-view/list-view.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
    children: [
      { path: '', redirectTo: 'view/noteview', pathMatch: 'full' },
      { path: 'view/noteview', component: NoteViewComponent },
      { path: 'view/listview', component: ListViewComponent },
      {  
        path: 'note/:noteid/edit', component: EditNoteOpenerComponent,
        outlet: 'noteEditOutlet'
      }
    ]
  }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent,DashboardComponent, NoteTakerComponent, NoteViewComponent, EditNoteOpenerComponent, NoteComponent, EditNoteViewComponent, ListViewComponent, RegisterComponent,  UserComponent],
  imports: [MatToolbarModule, BrowserModule, MatFormFieldModule,
    MatInputModule, MatCardModule, BrowserAnimationsModule,MatCardModule,
    FormsModule, MatExpansionModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes), MatDialogModule, MatSelectModule],
  providers: [AuthenticationService, RouterService, NotesService, CanActivateRouteGuard,UserService],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteViewComponent]
})

export class AppModule { }
