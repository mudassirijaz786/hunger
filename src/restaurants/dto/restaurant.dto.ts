import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  @MinLength(2)
  readonly name: string;

  @Field()
  @MinLength(4)
  readonly address: string;
}

@InputType()
export class UpdateRestaurantInput extends PickType(CreateRestaurantInput, [
  'id',
] as const) {}
