import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateInvoiceInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly foodDetails: string;

  @Field()
  readonly balanceDue: number;

  @Field()
  readonly adjustment: number;
}

@InputType()
export class UpdateInvoiceInput extends PickType(CreateInvoiceInput, [
  'id',
] as const) {}
