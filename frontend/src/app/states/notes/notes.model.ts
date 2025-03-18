import { Note } from '../../services/backend.service';

export interface NotesStateModel {
  notes: Note[];
  loading: boolean;
  error?: string;
}

export const defaultNotesState: NotesStateModel = {
  notes: [],
  loading: false
};