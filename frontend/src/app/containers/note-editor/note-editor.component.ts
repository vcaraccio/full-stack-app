import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CancelNote, ChangeDescription, ChangeTitle, EditorSave } from '../../states/note-editor/note-editor.action';
import { NoteEditor } from '../../states/note-editor/note-editor.selectors';

@Component({
  selector: 'app-note-editor',
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule
  ],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.scss'
})
export class NoteEditorComponent {

  title$: Observable<string> = inject(Store).select(NoteEditor.title);
  description$: Observable<string> = inject(Store).select(NoteEditor.description);
  isUpdate$: Observable<boolean> = inject(Store).select(NoteEditor.isUpdate);

  constructor(private readonly store: Store) { }

  onSaveClick() {
    this.store.dispatch(new EditorSave());
  }

  onTitleInput(title: string) {
    this.store.dispatch(new ChangeTitle(title));
  }

  onDescriptionInput(description: string) {
    this.store.dispatch(new ChangeDescription(description));
  }

  onCancelClick() {
    this.store.dispatch(new CancelNote());
  }

}
