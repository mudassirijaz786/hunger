import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { Customer } from '../customers/customer.entity';
import { CustomersService } from '../customers/customers.service';

import { JwtPayload } from './dto/jwt-payload.dto';
import { SignInInput } from './dto/auth.dto';
import { SignInResult } from './dto/auth.dto';
import { SignUpInput } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly customersService: CustomersService,
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async signUp(input: SignUpInput): Promise<Customer> {
    const newCustomer = new Customer();
    Object.assign(newCustomer, input);
    newCustomer.password = AuthService.encryptPassword(newCustomer.password);
    const result = await this.customersRepository.save(newCustomer);
    return result;
  }

  private static encryptPassword(password): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  async signIn(input: SignInInput): Promise<SignInResult> {
    const customer = await this.customersService.findOneByName(input.username);
    if (!customer) {
      return new SignInResult();
    }

    const valid = await bcrypt.compare(input.password, customer.password);
    if (!valid) {
      return new SignInResult();
    }

    const payload: JwtPayload = {
      id: customer.id,
      username: customer.username,
      email: customer.email,
      role: customer.role,
    };
    const token = this.jwtService.sign(payload);

    return { ...customer, token };
  }

  async validateCustomer(payload: JwtPayload): Promise<Customer> {
    const customer = await this.customersService.findOneByName(
      payload.username,
    );
    return customer;
  }
}
