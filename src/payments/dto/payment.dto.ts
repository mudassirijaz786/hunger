import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { PaymentType } from '../entities/payment.entity';

@InputType()
export class CreatePaymentInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly amountPaid: string;

  @Field()
  readonly type: PaymentType;
}

@InputType()
export class UpdatePaymentInput extends PickType(CreatePaymentInput, [
  'id',
] as const) {}
