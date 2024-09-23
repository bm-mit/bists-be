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

  uploadData(data: UploadDto) {
    this.verifyData(data.indicators);

    if (!this.devicesService.findById(data.userId))
      throw new UnauthorizedException('User not found');
    this.emitData(data);
  }

  verifyData(data: any) {
    Object.values(data).forEach((value: any) => {
      if (typeof value !== 'number') {
        throw new BadRequestException('Values must be numbers');
      }
    });
  }

  emitData(data: UploadDto) {
    this.socketGateway.sendIndicators(data);
  }
}
