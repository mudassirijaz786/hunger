import { InputType, Int, Field, PickType } from '@nestjs/graphql';

@InputType()
export class CreateEntreeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}

@InputType()
export class UpdateEntreeInput extends PickType(CreateEntreeInput, [
  'id',
] as const) {}
