import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { NoteEntity } from './entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepo: Repository<NoteEntity>
  ) {}

  async create(createNoteDto: CreateNoteDto, id: number)
  {
    /*
    const isExist = await this.noteRepo.findBy({
      user: { id },
      title: createNoteDto.title
    });

    if (isExist.length) { throw new BadRequestException('This note alreade exist'); }
    */

    const newNote = {title: createNoteDto.title, text: createNoteDto.text, user: {id,}}
    
    return await this.noteRepo.save(newNote);
  }

  async findAll(userId: number)
  {
    return await this.noteRepo.findBy({user: {id: userId}});
    // if note connect to some another entity (for exemple, ImageEntity)
    // we can add ----> relations: { image: true }
    // await this.noteRepo.findOne({ where: {user: {userId}}, relations: {image: true} })
    // after this we will get all images of the note as array
  }

  async findOne(id: number, userId: number)
  {
    const note = await this.noteRepo.findOne({
      where: {
        id: id,
        user: {id: userId}
      }
    })
    
    if (!note) { throw new NotFoundException('This note not found'); }
    
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto, userId: number)
  {
    const note = await this.noteRepo.findOne({
      where: {
        id: id,
        user: {id: userId}
      }
    });
    
    if (!note) { throw new NotFoundException('This note not found'); }
    
    return await this.noteRepo.save({
      ...note,
      ...updateNoteDto
    });
  }

  async remove(id: number, userId: number)
  {
    const note = await this.noteRepo.findOne({
      where: {
        id: id,
        user: {id: userId}
      }
    });
    
    if (!note) { throw new NotFoundException('This note not found'); }

    return await this.noteRepo.delete(id)
  }
}
