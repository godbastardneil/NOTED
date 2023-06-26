import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { NoteEntity } from './note.entity';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
  imports: [TypeOrmModule.forFeature([NoteEntity])]
})
export class NoteModule {}
