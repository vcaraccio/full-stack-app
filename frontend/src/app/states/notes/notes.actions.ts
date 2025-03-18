import { Note } from '../../services/backend.service';

export class LoadNotes {
  static readonly type = '[Notes] Load Notes';
}

export class LoadNotesSuccess {
  static readonly type = '[Notes] Load Notes Success';
  constructor(public readonly notes: Note[]) { }
}

export class LoadNotesFailed {
  static readonly type = '[Notes] Load Notes Failed';
  constructor(public readonly error: string) { }
}

export class SaveNote {
  static readonly type = '[Note Editor] Save Note';
  constructor(public readonly note: Note) { }
}

export class SaveNoteSuccess {
  static readonly type = '[Note Editor] Save Note Success';
}

export class SaveNoteFailed {
  static readonly type = '[Note Editor] Save Note Failed';
  constructor(public readonly error: string) { }
}

export class DeleteNote {
  static readonly type = '[Note Editor] Delete Note';
  constructor(public readonly id: number) { }
}

export class DeleteNoteSuccess {
  static readonly type = '[Note Editor] Delete Note Success';
}

export class DeleteNoteError {
  static readonly type = '[Note Editor] Delete Note Error';
  constructor(public readonly error: string) { }
}
