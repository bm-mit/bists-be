import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceEntity } from '../entities/device.entity';
import { Repository } from 'typeorm';
import { RegisterDeviceDto } from './dto/register.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(DeviceEntity)
    private devicesRepository: Repository<DeviceEntity>,
  ) {}

  async register(device: RegisterDeviceDto) {
    return this.devicesRepository.save(device);
  }

  async findById(id: number) {
    return this.devicesRepository.findOneBy({ id });
  }
}
