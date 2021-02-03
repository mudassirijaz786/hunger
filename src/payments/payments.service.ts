import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/payment.dto';

@Injectable()
export class PaymentsService {
  findAll() {
    return `This action returns all payments`;
  }
}
