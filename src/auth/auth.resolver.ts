import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Customer } from '../customers/entity/customer.entity';

import { AuthService } from './auth.service';
import {
  CreateCustomerInput,
  SignInResult,
  LoginCustomerInput,
} from '../customers/dto/customers.dto';

@Resolver(() => Customer)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Customer)
  async signUp(@Args('input') input: CreateCustomerInput): Promise<Customer> {
    const result = await this.authService.signUp(input);
    return result;
  }

  @Mutation(() => SignInResult)
  async signIn(
    @Args('input') input: LoginCustomerInput,
  ): Promise<SignInResult> {
    const result = await this.authService.signIn(input);
    if (!result.token) {
      throw new BadRequestException();
    }
    return result;
  }
}
