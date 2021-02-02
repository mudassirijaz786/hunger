import { Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './dto/invoice.dto';
import { UpdateInvoiceInput } from './dto/invoice.dto';

@Injectable()
export class InvoicesService {
  create(createInvoiceInput: CreateInvoiceInput) {
    return 'This action adds a new invoice';
  }

  findAll() {
    return `This action returns all invoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
