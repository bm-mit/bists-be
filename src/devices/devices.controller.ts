import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDeviceDto } from './dto/register.dto';
import { ApiOperation } from '@nestjs/swagger';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new device' })
  registerDevice(@Body() body: RegisterDeviceDto) {
    return this.devicesService.register(body);
  }
}
