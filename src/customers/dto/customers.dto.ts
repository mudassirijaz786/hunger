import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { IsAlphanumeric, IsAscii, IsEmail, MinLength } from 'class-validator';
import { CreateOrderInput } from 'src/orders/dto/order.dto';
import { Order } from 'src/orders/entities/order.entity';
import {
  Customer,
  CustomersRole,
} from '../../customers/entity/customer.entity';

@InputType()
export class CreateCustomerInput {
  @Field()
  @IsAlphanumeric()
  @MinLength(5)
  readonly username: string;

  @Field()
  @IsEmail()
  @MinLength(6)
  readonly email: string;

  @Field()
  @MinLength(8)
  readonly password: string;

  @Field()
  @MinLength(8)
  readonly hashPassword: string;

  @Field()
  readonly role: CustomersRole;

  @Field()
  @MinLength(4)
  readonly city: string;

  @Field()
  @MinLength(4)
  readonly country: string;

  @Field()
  @MinLength(5)
  readonly street: string;

  @Field()
  @MinLength(10)
  readonly phone: string;
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
