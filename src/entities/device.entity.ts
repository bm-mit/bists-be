import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('devices')
export class DeviceEntity extends BaseEntity {
  @Column()
  @ApiProperty({ description: "User's name of the device" })
  username: string;
}
