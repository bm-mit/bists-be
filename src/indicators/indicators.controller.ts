import { Body, Controller, Post } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { UploadDto } from './dto/upload.dto';

@Controller('indicators')
export class IndicatorsController {
  constructor(private indicatorsService: IndicatorsService) {}

  @Post()
  uploadData(@Body() data: UploadDto) {
    console.log(data);
    return this.indicatorsService.uploadData(data);
  }
}
