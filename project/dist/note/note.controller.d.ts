import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';
import { NoteService } from './note.service';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    getAll(): Promise<any[]>;
    getId(id: string): Promise<any>;
    create(dto: CreateNoteDto): Promise<any[]>;
    update(id: string, dto: UpdateNoteDto): Promise<any[]>;
    delete(id: string): Promise<any[]>;
}
