import {
  Controller,
  ParseUUIDPipe,
  NotFoundException,
  Get,
  Param,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = this.ordersService.getById(id);

    if (!order) throw new NotFoundException('Order not found');

    return order;
  }
}
