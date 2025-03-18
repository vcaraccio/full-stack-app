import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private readonly http: HttpClient) { }

  getAllNotes() {
    return this.http.get<Note[]>('http://localhost:3000/api/v1/notes');
  }

  getNoteById(id: string | number) {
    return this.http.get<Note>(`http://localhost:3000/api/v1/notes/${id}`);
  }

  createNote(note: { title: string; description: string; }) {
    return this.http.post<Note>('http://localhost:3000/api/v1/notes', note);
  }

  deleteNoteById(id: string | number) {
    return this.http.delete<void>(`http://localhost:3000/api/v1/notes/${id}`);
  }

  updateNoteById(id: string | number, note: { title: string; description: string; }) {
    return this.http.put<Note>(`http://localhost:3000/api/v1/notes/${id}`, note);
  }

}
