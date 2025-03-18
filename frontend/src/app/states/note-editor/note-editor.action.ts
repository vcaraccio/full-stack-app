import { Note } from '../../services/backend.service';

export class EditorSave {
  static readonly type = '[NoteEditor] Save';
}

export class EditorLoad {
  static readonly type = '[NoteEditor] Load';
  constructor(public readonly note: Note) { }
}

export class ChangeTitle {
  static readonly type = '[NoteEditor] Change Title';
  constructor(public readonly title: string) { }
}

export class ChangeDescription {
  static readonly type = '[NoteEditor] Change Description';
  constructor(public readonly description: string) { }
}

export class CancelNote {
  static readonly type = '[NoteEditor] Cancel';
}