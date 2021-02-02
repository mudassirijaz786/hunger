import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { deliveryStatus } from '../entities/order.entity';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly status: deliveryStatus;
}

@InputType()
export class UpdateOrderInput extends PickType(CreateOrderInput, [
  'id',
] as const) {}
