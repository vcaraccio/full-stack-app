import { Note } from '../models/note';

export abstract class NoteRepository {

  abstract create(title: string, description: string): Promise<Note>;
  abstract findAll(): Promise<Note[]>;
  abstract findOne(id: number): Promise<Note | undefined>;
  abstract update(id: number, title: string, description: string): Promise<void>;
  abstract delete(id: number): Promise<void>;

}