import { Note } from '../models/note';

export interface NoteRepository {
  create(title: string, description: string): Promise<void>;
  findAll(): Promise<Note[]>;
  findOne(id: number): Promise<Note>;
  update(id: number, title: string, description: string): Promise<void>;
  delete(id: number): Promise<void>;
}