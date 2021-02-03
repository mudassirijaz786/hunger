import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateMenuInput {
  @Field()
  @MinLength(2)
  readonly name: string;
}
