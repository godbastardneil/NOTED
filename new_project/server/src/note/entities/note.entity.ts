import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'note'})
export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    title:string;

    @Column({type: 'text'})
    text: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.notes)
    @JoinColumn({name: 'userId'})
    user: UserEntity
}