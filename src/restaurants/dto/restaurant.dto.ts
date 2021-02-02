import { InputType, Int, Field, PickType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateRestaurantInput extends PickType(CreateRestaurantInput, [
  'id',
] as const) {}
