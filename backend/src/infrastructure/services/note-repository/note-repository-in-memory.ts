import { Injectable } from '@nestjs/common';
import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

@Injectable()
export class NoteRepositoryInMemory extends NoteRepository {

  private readonly notes: Map<number, Note> = new Map();

  constructor() {
    super();
    this.notes.set(1, { id: 1, title: 'Note 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin nulla neque, eget elementum lectus molestie in. Aenean ultrices, turpis sit amet iaculis efficitur, leo justo condimentum magna, tristique sollicitudin leo diam volutpat justo. Suspendisse potenti. Integer at dui nec neque fermentum rutrum nec sit amet velit. Nulla facilisi. Aliquam at nunc massa. Mauris tempor leo ac posuere malesuada.', createdAt: new Date(), updatedAt: new Date() });
    this.notes.set(2, { id: 2, title: 'Note 2', description: 'Description 2', createdAt: new Date(), updatedAt: new Date() });
  }

  create(title: string, description: string): Promise<Note> {
    const id = Math.round(Math.random() * 1_000_000);
    this.notes.set(id, { id, title, description, createdAt: new Date(), updatedAt: new Date() });
    return new Promise(resolve => setTimeout(() => resolve(this.notes.get(id)!), 1000)); // Simulate network latency
  }

  findAll(): Promise<Note[]> {
    return new Promise(resolve => setTimeout(() => resolve(Array.from(this.notes.values())), 1000)); // Simulate network latency
  }

  findOne(id: number): Promise<Note | undefined> {
    if (!id || isNaN(id)) {
      return new Promise(resolve => setTimeout(() => resolve(undefined), 1000)); // Simulate network latency
    }
    return new Promise(resolve => setTimeout(() => resolve(this.notes.get(id)), 1000)); // Simulate network latency
  }

  update(id: number, title: string, description: string): Promise<void> {
    if (!this.notes.has(id)) {
      throw new Error('Note not found');
    }
    const note = this.notes.get(id)!;
    this.notes.set(id, { ...note, title, description, updatedAt: new Date() });
    return new Promise(resolve => setTimeout(() => resolve(), 1000)); // Simulate network latency;
  }

  delete(id: number): Promise<void> {
    if (!this.notes.has(id)) {
      throw new Error('Note not found');
    }
    this.notes.delete(id);
    return new Promise(resolve => setTimeout(() => resolve(), 1000)); // Simulate network latency;
  }

}