import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService
{
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string)
  {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, pass);
    
    if (!user || !passwordIsMatch) { throw new BadRequestException('User or password are incorrect'); }

    return user;
  }

  async login(user: IUser)
  {
    return {
      id: user.id,
      email: user.email,
      token: this.jwtService.sign({id: user.id, email: user.email})
    };
  }
}
