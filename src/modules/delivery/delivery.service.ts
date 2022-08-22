import { Injectable } from '@nestjs/common';
import { CanDeliveryDto } from './dto/can-delivery.dto';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Injectable()
export class DeliveryService {
  create(createDeliveryDto: CreateDeliveryDto) {
    return 'This action adds a new delivery';
  }

  canDeliver(deliveryParams: CanDeliveryDto) {
    console.log('aaa', deliveryParams);
    return `This action returns all delivery`;
  }
}
