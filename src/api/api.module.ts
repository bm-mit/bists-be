import { Module } from '@nestjs/common';
import { IndicatorsModule } from '../indicators/indicators.module';
import { DevicesModule } from '../devices/devices.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    IndicatorsModule,
    RouterModule.register([
      {
        path: 'api',
        module: DevicesModule,
      },
      {
        path: 'api',
        module: IndicatorsModule,
      },
    ]),
  ],
})
export class ApiModule {}
