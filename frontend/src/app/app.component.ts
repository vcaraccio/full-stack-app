import { Component } from '@angular/core';
import { NoteEditorComponent } from "./containers/note-editor/note-editor.component";
import { NoteListComponent } from "./containers/note-list/note-list.component";

@Component({
  selector: 'app-root',
  imports: [NoteListComponent, NoteEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
