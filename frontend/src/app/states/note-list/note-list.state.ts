import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SearchNotes } from './note-list.actions';
import { defaultNotesListState, NotesListStateModel } from './note-list.model';

@State<NotesListStateModel>({
  name: 'notesList',
  defaults: defaultNotesListState
})
@Injectable()
export class NotesListState {

  @Action(SearchNotes)
  searchNotes({ patchState }: StateContext<NotesListStateModel>, { query }: SearchNotes) {
    patchState({ query });
  }

}
