import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,

    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const check = await this.userRepo.findOneBy({email: createUserDto.email});
    if (check) { throw new BadRequestException('This email already exist') }

    const user = await this.userRepo.save({
      email: createUserDto.email,
      name: createUserDto.name,
      password: await argon2.hash(createUserDto.password)
    });
    
    return {
      id: user.id,
      email: user.email,
      token: this.jwtService.sign({id: user.id, email: user.email})
    };
  }

  async findOne(email: string): Promise<UserEntity>
  {
    return await this.userRepo.findOneBy({email: email});
  }
}
