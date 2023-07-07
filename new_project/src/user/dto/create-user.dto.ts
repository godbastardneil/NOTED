import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    
    @IsString()
    @MaxLength(15, { message: 'Password < 15 symbols'})
    name: string;

    @IsString()
    @MinLength(6, { message: 'Password > 6 symbols'})
    @MaxLength(15, { message: 'Password < 15 symbols'})
    password: string;
}
