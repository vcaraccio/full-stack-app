import { Controller, Get } from '@nestjs/common';
import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

@Controller('api/v1/notes')
export class AppController {

  constructor(private readonly noteRepo: NoteRepository) { }

  @Get()
  getHello(): Promise<Note[]> {
    return this.noteRepo.findAll();
  }

}
