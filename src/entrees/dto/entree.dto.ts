import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateEntreeInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  @MinLength(2)
  readonly name: string;

  @Field()
  @MinLength(5)
  readonly description: string;

  @Field()
  readonly price: number;
}

@InputType()
export class UpdateEntreeInput extends PickType(CreateEntreeInput, [
  'id',
] as const) {}
