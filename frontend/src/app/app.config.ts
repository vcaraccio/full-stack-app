import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { routes } from './app.routes';
import { NotesEditorState } from './states/note-editor/note-editor.state';
import { NotesListState } from './states/note-list/note-list.state';
import { NotesState } from './states/notes/notes.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore([
      NotesState,
      NotesListState,
      NotesEditorState
    ])
  ]
};
