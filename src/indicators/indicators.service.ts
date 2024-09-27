import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SocketGateway } from '../socket/socket.gateway';
import { UploadDto } from './dto/upload.dto';
import { DevicesService } from '../devices/devices.service';

@Injectable()
export class IndicatorsService {
  constructor(
    private socketGateway: SocketGateway,
    private devicesService: DevicesService,
  ) {}

  async uploadData(data: UploadDto) {
    this.verifyData(data.indicators);

    await this.verifyDevice(data.deviceId);
    this.emitData(data);
  }

  verifyData(data: any) {
    Object.values(data).forEach((value: any) => {
      if (typeof value !== 'number') {
        throw new BadRequestException('Values must be numbers');
      }
    });
  }

  async verifyDevice(deviceId: number) {
    if (!(await this.devicesService.findById(deviceId)))
      throw new UnauthorizedException('User not found');
  }

  async emitData(data: UploadDto) {
    const result = {
      indicators: data.indicators,
      device: await this.devicesService.findById(data.deviceId),
    };

    this.socketGateway.sendIndicators(result);
  }
}
