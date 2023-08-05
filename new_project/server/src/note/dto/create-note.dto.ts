import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserEntity } from "src/user/entities/user.entity";

export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    text: string;
}
