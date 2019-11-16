import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDTO } from './login-user.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @ApiResponse({ status: 201, description: 'Returns the JWT token.' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginUser: LoginUserDTO) {
    return this.authService.login(loginUser);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'Returns the user profile.' })
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getUserProfile(@Request() req) {
    const user = await this.userService.findUserByUsername(req.user.username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // Remove the password before returning
    const { password, ...result } = user;
    return result;
  }
}
