import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    const customers = await this.customersRepository.find();
    return customers;
  }

  async findOneByName(username: string): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ username });
    return customer;
  }

  async findById(id: number): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ id });
    return customer;
  }

  async delete(id: number): Promise<void> {
    await this.customersRepository.delete({ id });
  }
}
