import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createNoteDto: CreateNoteDto, @Req() req)
  {
    return this.noteService.create(createNoteDto, +req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req)
  {
    return this.noteService.findAll(+req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req)
  {
    return this.noteService.findOne(+id, +req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
    @Req() req
  )
  {
    return this.noteService.update(id, updateNoteDto, +req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number, @Req() req)
  {
    return this.noteService.remove(id, +req.user.id);
  }
}
