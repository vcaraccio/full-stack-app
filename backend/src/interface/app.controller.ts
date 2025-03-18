import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { Note } from 'src/domain/models/note';
import { NoteRepository } from 'src/domain/services/note-repository.interface';

@Controller('api/v1/notes')
export class AppController {

  constructor(private readonly noteRepo: NoteRepository) { }

  @Get()
  getAllNotes(): Promise<Note[]> {
    return this.noteRepo.findAll();
  }

  @Get(':id') // GET http://localhost:3000/api/v1/notes/123456
  async getNoteById(@Query('id') id: string): Promise<Note> {
    const note = await this.noteRepo.findOne(Number(id));
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  @Post()
  createNote(@Body() note: { title: string; description: string; }): Promise<Note> {
    return this.noteRepo.create(note.title, note.description);
  }

  @Delete(':id')
  deleteNoteById(@Param('id') id: string): Promise<void> {
    return this.noteRepo.delete(Number(id));
  }

  @Put(':id')
  updateNoteById(@Param('id') id: string, @Body() note: { title: string; description: string; }): Promise<void> {
    return this.noteRepo.update(Number(id), note.title, note.description);
  }

}
