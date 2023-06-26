import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [NoteModule],
})
export class AppModule {}
