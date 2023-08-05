import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  // froRootAsync for env
  imports: [
    UserModule, NoteModule, AuthModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (confServ: ConfigService) => ({
        type: 'postgres',
        host: confServ.get('POSTGRES_HOST'),
        port: confServ.get('POSTGRES_PORT'),
        database: confServ.get('POSTGRES_DB'),
        username: confServ.get('POSTGRES_USER'),
        password: confServ.get('POSTGRES_PASSWORD'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}') ],
        synchronize: true
      })
    })
  ],
})
export class AppModule {}
