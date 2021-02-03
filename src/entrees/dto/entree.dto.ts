import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateEntreeInput {
  @Field()
  @MinLength(2)
  readonly name: string;

  @Field()
  @MinLength(5)
  readonly description: string;

  @Field()
  readonly price: number;
}
