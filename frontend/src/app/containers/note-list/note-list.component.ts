import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Note } from '../../services/backend.service';
import { EditorLoad } from '../../states/note-editor/note-editor.action';
import { SearchNotes } from '../../states/note-list/note-list.actions';
import { NotesList } from '../../states/note-list/note-list.selectors';
import { DeleteNote, LoadNotes } from '../../states/notes/notes.actions';
import { Notes } from '../../states/notes/notes.selectors';

@Component({
  selector: 'app-note-list',
  imports: [
    CommonModule, MatCardModule, MatProgressBarModule,
    MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent implements AfterViewInit {

  loading$: Observable<boolean> = inject(Store).select(Notes.loading);
  error$: Observable<string | undefined> = inject(Store).select(Notes.error);
  notes$: Observable<Note[]> = inject(Store).select(NotesList.notes);
  query$: Observable<string> = inject(Store).select(NotesList.query);

  constructor(private readonly store: Store) { }

  ngAfterViewInit() {
    this.store.dispatch(new LoadNotes());
  }

  onSearchInput(text: string) {
    this.store.dispatch(new SearchNotes(text));
  }

  onEdit(note: Note) {
    this.store.dispatch(new EditorLoad(note));
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteNote(id));
  }


}
