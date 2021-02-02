import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { IsAlphanumeric, IsAscii, IsEmail, MinLength } from 'class-validator';
import { CreateOrderInput } from 'src/orders/dto/order.dto';
import {
  Customer,
  CustomersRole,
} from '../../customers/entity/customer.entity';

@InputType()
export class CreateCustomerInput implements Partial<Customer> {
  @Field()
  @IsAlphanumeric()
  @MinLength(1)
  readonly username: string;

  @Field()
  @IsEmail()
  @MinLength(1)
  readonly email: string;

  @Field()
  @IsAscii()
  @MinLength(8)
  readonly password: string;

  @Field()
  @IsAscii()
  readonly role: CustomersRole;

  @Field()
  @IsAscii()
  @MinLength(2)
  readonly city: string;

  @Field()
  @IsAscii()
  @MinLength(2)
  readonly country: string;

  @Field()
  @IsAscii()
  @MinLength(2)
  readonly street: string;

  @Field()
  @MinLength(1)
  readonly phone: number;
}

@InputType()
export class LoginCustomerInput extends PickType(CreateCustomerInput, [
  'username',
  'password',
] as const) {}

@ObjectType()
export class SignInResult extends Customer {
  @Field()
  readonly token: string;
}
