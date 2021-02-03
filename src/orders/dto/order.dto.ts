import { InputType, Field } from '@nestjs/graphql';
import { deliveryStatus } from '../entities/order.entity';

@InputType()
export class CreateOrderInput {
  @Field()
  readonly status: deliveryStatus;
}
