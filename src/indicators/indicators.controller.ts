import { Body, Controller, Post } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { UploadDto } from './dto/upload.dto';

@Controller('indicators')
export class IndicatorsController {
  constructor(private indicatorsService: IndicatorsService) {}

  @Post()
  async uploadData(@Body() data: UploadDto) {
    return this.indicatorsService.uploadData(data);
  }
}
