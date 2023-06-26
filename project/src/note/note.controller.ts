import { Body, Controller,
         Delete,
         Get, Param, Post, Put
        } from '@nestjs/common';
import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';
import { NoteService } from './note.service';
import { NoteEntity } from './note.entity';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Get('getAll')
    async getAll():Promise<NoteEntity[]> {
        return await this.noteService.getAll()
    }
    @Get('getId/:id')
    async getId(@Param('id') id:string):Promise<NoteEntity> {
        console.log(id);
        return await this.noteService.getById(id);
    }

    @Post('insert')
    async insert(@Body() dto: CreateNoteDto):Promise<NoteEntity[]> {
        console.log(dto);
        await this.noteService.insert(dto);
        return await this.noteService.getAll();
    }

    @Put('update/:id')
    async update(@Param('id') id:string, @Body() dto: UpdateNoteDto) {
        console.log(id, dto);
        await this.noteService.update(id, dto);
        return await this.noteService.getAll();
    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string) {
        console.log(id);
        await this.noteService.delete(id);
        return await this.noteService.getAll();
    }
}
