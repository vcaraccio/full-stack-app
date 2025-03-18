export class SearchNotes {
  static readonly type = '[Notes] Search Notes';
  constructor(public readonly query: string) { }
}