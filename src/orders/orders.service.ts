import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/order.dto';
import { UpdateOrderInput } from './dto/order.dto';

@Injectable()
export class OrdersService {
  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
