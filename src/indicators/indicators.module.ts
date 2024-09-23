import { Module } from '@nestjs/common';
import { IndicatorsController } from './indicators.controller';
import { DevicesModule } from '../devices/devices.module';
import { IndicatorsService } from './indicators.service';
import { SocketModule } from '../socket/socket.module';

@Module({
  imports: [DevicesModule, SocketModule],
  controllers: [IndicatorsController],
  providers: [IndicatorsService],
})
export class IndicatorsModule {}
