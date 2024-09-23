import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { IndicatorsModule } from '../indicators/indicators.module';
import { DevicesModule } from '../devices/devices.module';

@Module({
  controllers: [ApiController],
  imports: [IndicatorsModule, DevicesModule],
})
export class ApiModule {}
