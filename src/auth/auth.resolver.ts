import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Customer } from '../customers/customer.entity';

import { AuthService } from './auth.service';
import { SignInInput } from './dto/auth.dto';
import { SignInResult } from './dto/auth.dto';
import { SignUpInput } from './dto/auth.dto';

@Resolver(() => Customer)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Customer)
  async signUp(@Args('input') input: SignUpInput): Promise<Customer> {
    const result = await this.authService.signUp(input);
    return result;
  }

  @Mutation(() => SignInResult)
  async signIn(@Args('input') input: SignInInput): Promise<SignInResult> {
    const result = await this.authService.signIn(input);
    if (!result.token) {
      throw new BadRequestException();
    }
    return result;
  }
}
