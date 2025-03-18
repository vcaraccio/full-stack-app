import { Module } from '@nestjs/common';
import { NoteRepository } from './domain/services/note-repository.interface';
import { NoteRepositoryInMemory } from './infrastructure/services/note-repository/note-repository-in-memory';
import { AppController } from './interface/app.controller';

@Module({
  imports: [],
  controllers: [
    AppController
  ],
  providers: [
    { provide: NoteRepository, useClass: NoteRepositoryInMemory },
  ],
})
export class AppModule { }
