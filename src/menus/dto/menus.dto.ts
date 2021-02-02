import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateMenuInput {
  @Field(() => Int)
  readonly id: number;

  @Field()
  @MinLength(2)
  readonly name: string;
}

@InputType()
export class UpdateMenuInput extends PickType(CreateMenuInput, [
  'id',
] as const) {}
