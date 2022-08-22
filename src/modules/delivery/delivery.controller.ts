import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CanDeliveryDto } from './dto/can-delivery.dto';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  canDeliver(@Query() deliveryParams: CanDeliveryDto) {
    return this.deliveryService.canDeliver(deliveryParams);
  }
}
