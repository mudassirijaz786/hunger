import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentCustomer } from 'src/auth/customer.decorator';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Customer } from './entity/customer.entity';
import { CustomersRole } from './entity/customer.entity';
import { CustomersService } from './customers.service';

@Resolver(() => Customer)
export class UsersResolver {
  constructor(private readonly customersService: CustomersService) {}

  // @UseGuards(GqlAuthGuard, RolesGuard)
  // @Roles([UserRole.CUSTOMER])
  @Query(() => [Customer])
  async customers(): Promise<Customer[]> {
    const customers = await this.customersService.findAll();
    return customers;
  }

  // @UseGuards(GqlAuthGuard, RolesGuard)
  // @Roles([UserRole.CUSTOMER])
  @Query(() => Customer)
  async customerByName(@Args('username') username: string): Promise<Customer> {
    const customer = await this.customersService.findOneByName(username);
    return customer;
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => Customer)
  async whoami(@CurrentCustomer() customer: Customer): Promise<Customer> {
    return this.customersService.findById(customer.id);
  }

  // @UseGuards(GqlAuthGuard, RolesGuard)
  // @Roles([UserRole.CUSTOMER])
  @Mutation(() => Customer)
  deleteCustomer(@Args('id', { type: () => Int }) id: number): Promise<void> {
    return this.customersService.delete(id);
  }
}
