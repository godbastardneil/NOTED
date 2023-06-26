import { Body, Controller,
         Delete,
         Get, Param, Post, Put
        } from '@nestjs/common';
import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Get('getAll')
    async getAll():Promise<any[]> {
        return this.noteService.getAll()
    }
    @Get('getId/:id')
    async getId(@Param('id') id:string):Promise<any> {
        console.log(id);
        return this.noteService.getId(id);
    }

    @Post('create')
    async create(@Body() dto: CreateNoteDto):Promise<any[]> {
        console.log(dto);
        return this.noteService.create(dto);
    }

    @Put('update/:id')
    async update(@Param('id') id:string, @Body() dto: UpdateNoteDto) {
        console.log(id, dto);
        return this.noteService.update(id, dto);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string) {
        console.log(id);
        return this.noteService.delete(id);
    }
}
