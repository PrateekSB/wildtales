import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from 'src/users/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findUserByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    throw new HttpException({ error: 'Invalid credentials' }, 403);
  }

  async login(loginUser: LoginUserDTO) {
    const payload = { username: loginUser.username, sub: loginUser.id };
    const userProfile = await this.usersService.findUserByUsername(
      loginUser.username,
    );

    if (!userProfile) {
      new HttpException(
        'Information about the user does not exist',
        HttpStatus.NOT_FOUND,
      );
      return;
    }

    const { password, ...userInfo } = userProfile;
    return {
      ...userInfo,
      access_token: this.jwtService.sign(payload),
    };
  }
}
