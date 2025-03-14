import { Injectable } from '@nestjs/common';
import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

@Injectable()
export class NoteRepositoryInMemory extends NoteRepository {

  private readonly notes: Map<number, Note> = new Map();

  create(title: string, description: string): Promise<Note> {
    const id = Math.round(Math.random() * 1_000_000);
    this.notes.set(id, { id, title, description, createdAt: new Date(), updatedAt: new Date() });
    return Promise.resolve(this.notes.get(id)!);
  }

  findAll(): Promise<Note[]> {
    return Promise.resolve(Array.from(this.notes.values()));
  }

  findOne(id: number): Promise<Note | undefined> {
    if (!id || isNaN(id)) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(this.notes.get(id));
  }

  update(id: number, title: string, description: string): Promise<void> {
    if (!this.notes.has(id)) {
      throw new Error('Note not found');
    }
    const note = this.notes.get(id)!;
    this.notes.set(id, { ...note, title, description, updatedAt: new Date() });
    return Promise.resolve();
  }

  delete(id: number): Promise<void> {
    if (!this.notes.has(id)) {
      throw new Error('Note not found');
    }
    this.notes.delete(id);
    return Promise.resolve();
  }

}