import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entity/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    const customers = await this.customersRepository.find({
      relations: ['orders'],
    });
    return customers;
  }

  async findOneByName(username: string): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ username });
    return customer;
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ id });
    return customer;
  }

  async delete(id: string): Promise<void> {
    await this.customersRepository.delete({ id });
  }
}
