import { Selector } from '@ngxs/store';
import { Note } from '../../services/backend.service';
import { Notes } from '../notes/notes.selectors';
import { NotesListStateModel } from './note-list.model';
import { NotesListState } from './note-list.state';

export class NotesList {

  @Selector([NotesListState])
  static query(state: NotesListStateModel) { return state.query; }

  @Selector([NotesList.query, Notes.all])
  static notes(query: string, all: Note[]) {
    if (!all) return [];
    const sorted = all.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    if (!query) return sorted;

    const lowerCase = query.toLowerCase();
    return sorted
      .filter(note =>
        note.title.toLowerCase().includes(lowerCase) ||
        note.description.toLowerCase().includes(lowerCase)
      );
  }

}
