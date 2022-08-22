import { IsString, IsNumber } from 'class-validator';

export class CanDeliveryDto {
  @IsString()
  address: string;
  @IsNumber()
  cost: number;
}
