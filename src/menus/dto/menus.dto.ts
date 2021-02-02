import { InputType, Int, Field, PickType } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateMenuInput extends PickType(CreateMenuInput, [
  'id',
] as const) {}
