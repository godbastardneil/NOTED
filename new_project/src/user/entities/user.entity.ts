import { NoteEntity } from "src/note/entities/note.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'user'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: 'varchar', length: 15})
    name:string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false, type: 'varchar'})
    password:string;

    @Column({type: 'varchar', length: 5, default: 'user'})
    role: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => NoteEntity, (note) => note.user, {
        onDelete: 'CASCADE'
    })
    notes: NoteEntity[]
}
