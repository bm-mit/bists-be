import { IsNumber, IsObject } from 'class-validator';
import { Expose } from 'class-transformer';

export class UploadDto {
  @IsNumber()
  deviceId: number;

  @IsObject()
  indicators: {
    [key: string]: number;
  };
}
