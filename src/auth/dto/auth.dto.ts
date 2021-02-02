import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsAscii, IsEmail, MinLength } from 'class-validator';
import { CustomersRole } from 'src/customers/dto/customers.enum';

import { Customer } from '../../customers/entity/customer.entity';

@InputType()
export class SignUpInput implements Partial<Customer> {
  @ApiProperty()
  @Field()
  @IsAlphanumeric()
  @MinLength(1)
  readonly username: string;

  @ApiProperty()
  @Field()
  @IsEmail()
  @MinLength(1)
  readonly email: string;

  @ApiProperty()
  @Field()
  @IsAscii()
  @MinLength(8)
  readonly password: string;

  @ApiProperty()
  @Field()
  @IsAscii()
  readonly role: CustomersRole;

  @ApiProperty()
  @Field()
  @IsAscii()
  @MinLength(2)
  readonly city: string;

  @ApiProperty()
  @Field()
  @IsAscii()
  @MinLength(2)
  readonly country: string;

  @ApiProperty()
  @Field()
  @IsAscii()
  @MinLength(2)
  readonly street: string;
}

@InputType()
export class SignInInput extends PickType(SignUpInput, [
  'username',
  'password',
] as const) {}

@ObjectType()
export class SignInResult extends Customer {
  @Field()
  readonly token: string;
}
