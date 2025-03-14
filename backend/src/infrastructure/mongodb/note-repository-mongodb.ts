import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

export class NoteRepositoryMongoDB implements NoteRepository {

  create(title: string, description: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: number): Promise<Note> {
    throw new Error('Method not implemented.');
  }

  update(id: number, title: string, description: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

}