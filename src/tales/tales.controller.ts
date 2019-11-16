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
import { TalesDto } from './tales.dto';
import { TalesService } from './tales.service';

@Controller()
export class TalesController {
  constructor(
    private readonly talesService: TalesService,
  ) {}

  @Get('/tales')
  async getTales(@Request() req) {
    return (await this.talesService.findAll());
  }
}
