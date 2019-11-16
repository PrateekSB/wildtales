import { Module } from '@nestjs/common';
import { TalesService } from './tales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tales } from '../database/entities/tales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tales])],
  providers: [TalesService],
  exports: [TalesService],
})
export class TalesModule {}
