export class Note {
  noteId: Number;
  noteTitle: string;
  noteContent: string;
  noteStatus: string;
  noteCreatedBy:String;
  noteCreationDate:String;
  
  constructor() {
    this.noteTitle = '';
    this.noteContent = '';
    this.noteStatus = 'not-started';
  }
}
