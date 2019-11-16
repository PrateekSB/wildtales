import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity()
export class Tales {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @PrimaryColumn()
  @IsString()
  author: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  chapter1: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  chapter2: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  chapter3: string;
}
