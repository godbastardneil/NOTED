import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Note'})
export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    text: string

    @Column({type: 'varchar', length: 15})
    username:string
}