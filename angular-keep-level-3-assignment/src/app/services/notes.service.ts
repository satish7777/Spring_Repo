import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class NotesService {
 
 notes: Note[];
 notesSubject: BehaviorSubject<Array<Note>>;
 private url : String;
 
 
 
  constructor(private authservice:AuthenticationService,private httpClient:HttpClient)
  {
    this.notes=[];
   this.notesSubject = new BehaviorSubject([]);
   this.url = 'http://localhost:8082/api/v1/note/';
 }
 
 fetchNotesFromServer() {
   console.log("inside fetchNotesFromServer");
   const completeUrl = `${this.url}${localStorage.getItem('userId')}`;
   console.log(completeUrl +" "+localStorage.getItem('bearerToken'));
   
    const headerToPassAuthToken = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
   .set('Authorization',`Bearer ${localStorage.getItem('bearerToken')}`).set('responseType','text');
 
   return this.httpClient.get<Note[]>(completeUrl,{
     headers: headerToPassAuthToken
   }).subscribe(notes =>{
     console.log("inside fetchNotesFromServer subscribe "+notes);
     this.notes=notes;
     this.notesSubject.next(this.notes);
   },
   (err:any)=>{
     console.log("inside fetchNotesFromServer error "+err);
     this.notesSubject.error(err);
   })
 
 }
 
 getNotes(): BehaviorSubject<Array<Note>> {
   console.log("inside getnotes");
   return this.notesSubject;
 
 }
 
 addNote(note: Note): Observable<Note> {
   console.log("inside addNote============>"+JSON.stringify(note));
   //let formattedNoteJson = JSON.stringify(Note);
   let headerToPassAuthToken = new HttpHeaders({
     'Authorization': 'Bearer ' + localStorage.getItem('bearerToken'),
     'Content-Type': 'application/json; charset=utf-8'
   });
    
    note.noteCreatedBy = localStorage.getItem("userId");
//note.category.id=localStorage.getItem("Id");
//console.log("cat"+localStorage.getItem("Category.categoryId"));
   return this.httpClient.post<Note>('http://localhost:8082/api/v1/note',note,{
     headers:headerToPassAuthToken
    }).pipe(tap(addedNote => {
    // this.notes = [];
     console.log("added note is "+JSON.stringify(addedNote)+ "notes array is "+this.notes);
       this.notes.push(addedNote);
       this.notesSubject.next(this.notes);
       console.log(this.notes);
 
   }))
 
 }
 
 editNote(note: Note): Observable<Note> {
   console.log("inside satish editNote"+note.noteId);
   return this.httpClient.put<Note>(`http://localhost:8082/api/v1/note/${localStorage.getItem('userId')}/${note.noteId}`,note,{
     headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.getBearerToken()}`)
   }).pipe(tap(editedNote =>{
 
   // console.log("note id pipe"+note.noteId);
     console.log("note id pipe"+editedNote.noteId);
       const note = this.notes.find(note => note.noteId == editedNote.noteId);
 
       Object.assign(note,editedNote);
       this.notesSubject.next(this.notes);
   }))
 
 }
 
 getNoteById(noteId): Note {
   console.log("inside noteId==========>"+noteId);
   console.log("inside getNoteById");
   let foundnote=this.notes.find(note => note.noteId==noteId);
   console.log(foundnote);
   return foundnote;
 }
 
//  deleteNote(note: Note): Observable<Note> {
//    console.log("inside deleteNote");
//    return this.httpClient.delete<Note>(`http://localhost:8082/api/v1/note/${localStorage.getItem('userId')}/${note.noteId}`, {
//      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authservice.getBearerToken()}`)
//    }).pipe(tap(deletedNote => {
//      this.notes.splice(this.notes.indexOf(note), 1);
 
//      this.notesSubject.next(this.notes);
//    }))
//  }

deleteNote(noteId): any {
  const bearerToken = this.authservice.getBearerToken();
  const userId = this.authservice.getUserId();
  return this.httpClient.delete<any>(`${this.url}/${userId}/${noteId}`,
    { headers: new HttpHeaders().set('Authorization', `Bearer ${bearerToken}`) });
}
}