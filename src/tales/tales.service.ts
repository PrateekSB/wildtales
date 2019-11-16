import { Injectable } from '@nestjs/common';
import { Tales } from '../database/entities/tales.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

export type Tales = Tales;

@Injectable()
export class TalesService {
  constructor(
    @InjectRepository(Tales)
    private readonly talesRepository: Repository<Tales>,
  ) {}

  async find(where: {}): Promise<Tales | undefined> {
    return this.talesRepository.findOne({ where: { where } });
  }

  async findAll(): Promise<Tales[] | undefined> {
    return this.talesRepository.find();
  }
}
