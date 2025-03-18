import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs';
import { BackendService } from '../../services/backend.service';
import { DeleteNote, DeleteNoteError, DeleteNoteSuccess, LoadNotes, LoadNotesFailed, LoadNotesSuccess, SaveNote, SaveNoteFailed, SaveNoteSuccess } from './notes.actions';
import { defaultNotesState, NotesStateModel } from './notes.model';

@State<NotesStateModel>({
  name: 'notes',
  defaults: defaultNotesState
})
@Injectable()
export class NotesState {

  constructor(private readonly backendService: BackendService) { }

  @Action([LoadNotes, SaveNoteSuccess, DeleteNoteSuccess], { cancelUncompleted: true })
  loadNotes({ patchState, dispatch }: StateContext<NotesStateModel>) {
    patchState({ loading: true });
    return this.backendService.getAllNotes().pipe(
      tap(notes => dispatch(new LoadNotesSuccess(notes))),
      catchError(error => dispatch(new LoadNotesFailed(error.message)))
    );
  }

  @Action(LoadNotesSuccess)
  loadNotesSuccess(
    { patchState }: StateContext<NotesStateModel>,
    { notes }: LoadNotesSuccess
  ) {
    patchState({ notes, loading: false });
  }

  @Action([LoadNotesFailed, SaveNoteFailed])
  loadNotesFailed(
    { patchState }: StateContext<NotesStateModel>,
    { error }: LoadNotesFailed
  ) {
    patchState({ error, loading: false });
  }

  @Action(SaveNote)
  saveNote(
    { dispatch }: StateContext<NotesStateModel>,
    { note }: SaveNote
  ) {
    return (note.id
      ? this.backendService.updateNoteById(note.id, note)
      : this.backendService.createNote(note)
    ).pipe(
      tap(() => dispatch(new SaveNoteSuccess())),
      catchError(error => dispatch(new SaveNoteFailed(error.message)))
    );
  }

  @Action(DeleteNote)
  deleteNote(
    { dispatch }: StateContext<NotesStateModel>,
    { id }: DeleteNote
  ) {
    return this.backendService.deleteNoteById(id).pipe(
      tap(() => dispatch(new DeleteNoteSuccess())),
      catchError(error => dispatch(new DeleteNoteError(error.message)))
    );
  }

}
