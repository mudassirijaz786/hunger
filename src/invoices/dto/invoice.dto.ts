import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInput {
  @Field()
  readonly foodDetails: string;

  @Field()
  readonly balanceDue: number;

  @Field()
  readonly adjustment: number;
}
