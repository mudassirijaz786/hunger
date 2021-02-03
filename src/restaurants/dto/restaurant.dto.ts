import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
  @Field()
  @MinLength(2)
  readonly name: string;

  @Field()
  @MinLength(4)
  readonly address: string;
}
