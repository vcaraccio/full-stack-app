import { Selector } from '@ngxs/store';
import { NoteEditorStateModel } from './note-editor.model';
import { NotesEditorState } from './note-editor.state';

export class NoteEditor {

  @Selector([NotesEditorState])
  static title(state: NoteEditorStateModel) { return state.title || ''; }

  @Selector([NotesEditorState])
  static description(state: NoteEditorStateModel) { return state.description || ''; }

  @Selector([NotesEditorState])
  static id(state: NoteEditorStateModel) { return state.id; }

  @Selector([NoteEditor.id])
  static isUpdate(id: number | undefined) { return !!id; }

}