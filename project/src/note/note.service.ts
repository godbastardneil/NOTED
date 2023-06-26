import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';

@Injectable()
export class NoteService {
    notes:any[]
    constructor() {
        this.notes = [
            {
                id: 1,
                text: 'rest',
                username: 'user1'
            },
            { id: 2, text: 'rest', username: 'user1' },
            { id: 3, text: 'rest', username: 'user2' }
        ]
    }

    async getAll():Promise<any[]> {
        return this.notes;
    }
    async getId(id:string):Promise<any> {
        console.log(id);
        return this.notes.find(n => n.id === Number(id));
    }

    async create(dto: CreateNoteDto):Promise<any[]> {
        console.log(dto);
        return [... this.notes, dto];
    }

    async update(id:string, dto: UpdateNoteDto) {
        console.log(id, dto);
        const note = await this.notes.find(n => n.id === Number(id));
        note.text = dto.text;
        return this.notes;
    }

    async delete(id:string) {
        console.log(id);
        return this.notes.filter(n => n.id !== Number(id))
    }
}
