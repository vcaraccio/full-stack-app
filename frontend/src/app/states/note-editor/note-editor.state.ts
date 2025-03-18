import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Note } from '../../services/backend.service';
import { SaveNote, SaveNoteSuccess } from '../notes/notes.actions';
import { CancelNote, ChangeDescription, ChangeTitle, EditorLoad, EditorSave } from './note-editor.action';
import { defaultNoteEditorState, NoteEditorStateModel } from './note-editor.model';

@State<NoteEditorStateModel>({
  name: 'noteEditor',
  defaults: defaultNoteEditorState
})
@Injectable()
export class NotesEditorState {

  @Action(EditorLoad)
  loadNote({ patchState }: StateContext<NoteEditorStateModel>, { note }: EditorLoad) {
    patchState(note);
  }

  @Action(EditorSave)
  searchNotes({ getState, dispatch }: StateContext<NoteEditorStateModel>) {
    const state = getState();
    return dispatch(new SaveNote(state as Note));
  }

  @Action([CancelNote, SaveNoteSuccess])
  saveNoteSuccess({ setState }: StateContext<NoteEditorStateModel>) {
    setState(defaultNoteEditorState);
  }

  @Action(ChangeTitle)
  changeTitle({ patchState }: StateContext<NoteEditorStateModel>, { title }: ChangeTitle) {
    patchState({ title });
  }

  @Action(ChangeDescription)
  changeDescription({ patchState }: StateContext<NoteEditorStateModel>, { description }: ChangeDescription) {
    patchState({ description });
  }

}