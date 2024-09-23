import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Unique identifier' })
  id: number;

  @CreateDateColumn()
  @ApiProperty({ description: 'Date of creation' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Date of the last update' })
  updatedAt: Date;
}
