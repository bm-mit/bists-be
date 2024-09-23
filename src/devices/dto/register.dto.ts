import { PickType } from '@nestjs/swagger';
import { DeviceEntity } from '../../entities/device.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDeviceDto extends PickType(DeviceEntity, ['username']) {
  @IsString()
  @IsNotEmpty()
  username: string;
}
