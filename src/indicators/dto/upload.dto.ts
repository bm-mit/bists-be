import { IsNumber, IsObject } from 'class-validator';

export class UploadDto {
  @IsNumber()
  userId: number;

  @IsObject()
  indicators: {
    [key: string]: number;
  };
}
