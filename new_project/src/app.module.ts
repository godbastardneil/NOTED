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
        host: confServ.get('DB_HOST'),
        port: confServ.get('DB_PORT'),
        database: confServ.get('DB_NAME'),
        username: confServ.get('DB_USERNAME'),
        password: confServ.get('DB_PASSWORD'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}') ],
        synchronize: true
      })
    })
  ],
})
export class AppModule {}
