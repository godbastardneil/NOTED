import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
    constructor(@InjectRepository(NoteEntity) private readonly noteRepo: Repository<NoteEntity>){}

    async getAll():Promise<NoteEntity[]> {
        return await this.noteRepo.find();
    }
    async getById(id:string):Promise<NoteEntity> {
        console.log(id);
        return await this.noteRepo.findOneBy({id:Number(id)});
    }

    async insert(dto: CreateNoteDto) {
        console.log(dto);
        await this.noteRepo.insert({text: dto.text, username: dto.username});
    }

    async update(id:string, dto: UpdateNoteDto) {
        console.log(id, dto);
        await this.noteRepo.update(Number(id), {text: dto.text, username: dto.username});
    }

    async delete(id:string) {
        console.log(id);
        await this.noteRepo.delete(id);
    }
}
