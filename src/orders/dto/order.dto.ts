import { InputType, Int, Field, PickType } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateOrderInput extends PickType(CreateOrderInput, [
  'id',
] as const) {}
