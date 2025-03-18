import { Note } from '../../services/backend.service';

export interface NoteEditorStateModel extends Partial<Note> {
}

export const defaultNoteEditorState: NoteEditorStateModel = {
  title: '',
  description: ''
};