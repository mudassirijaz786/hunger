import { InputType, Field } from '@nestjs/graphql';
import { PaymentType } from '../entities/payment.entity';

@InputType()
export class CreatePaymentInput {
  @Field()
  readonly amountPaid: string;

  @Field()
  readonly type: PaymentType;
}
