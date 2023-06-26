import { Body, Controller,
         Delete,
         Get, Param, Post, Put
        } from '@nestjs/common';
import { CreateNoteDto } from './note.dto/create-note.dto';
import { UpdateNoteDto } from './note.dto/update-note.dto';

@Controller('note')
export class NoteController {
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

    @Get('getAll')
    async getAll():Promise<any[]> {
        return this.notes;
    }
    @Get('getId/:id')
    async getId(@Param('id') id:string):Promise<any> {
        console.log(id);
        return this.notes.find(n => n.id === Number(id));
    }

    @Post('create')
    async create(@Body() dto: CreateNoteDto):Promise<any[]> {
        console.log(dto);
        return [... this.notes, dto];
    }

    @Put('update/:id')
    async update(@Param('id') id:string, @Body() dto: UpdateNoteDto) {
        console.log(id, dto);
        const note = await this.notes.find(n => n.id === Number(id));
        note.text = dto.text;
        return this.notes;
    }

    @Delete('delete/:id')
    async delete(@Param('id') id:string) {
        console.log(id);
        return this.notes.filter(n => n.id !== Number(id))
    }
}
