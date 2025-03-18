import { Selector } from '@ngxs/store';
import { NotesStateModel } from './notes.model';
import { NotesState } from './notes.state';

export class Notes {

  @Selector([NotesState])
  static loading(state: NotesStateModel) { return state.loading; }

  @Selector([NotesState])
  static error(state: NotesStateModel) { return state.error; }

  @Selector([NotesState])
  static all(state: NotesStateModel) { return state.notes; }

}
