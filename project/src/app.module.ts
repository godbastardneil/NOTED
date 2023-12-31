import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

import { NoteModule } from './note/note.module';

@Module({
  controllers: [],
  providers: [],
  // froRootAsync for env
  imports: [NoteModule,
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                database: 'noted_project',
                username: 'custom_user',
                password: '123456',
                entities: [join(__dirname, '**', '*.entity.{ts,js}') ],
                migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
                synchronize: true
              }),
            ],
})
export class AppModule {}
