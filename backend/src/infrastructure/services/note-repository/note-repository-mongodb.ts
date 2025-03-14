import { Injectable } from '@nestjs/common';
import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

@Injectable()
export class NoteRepositoryMongoDB extends NoteRepository {

  create(title: string, description: string): Promise<Note> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: number): Promise<Note | undefined> {
    throw new Error('Method not implemented.');
  }

  update(id: number, title: string, description: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

}