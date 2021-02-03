import { InputType, Field, PickType } from '@nestjs/graphql';
import { IsAlphanumeric, MinLength } from 'class-validator';

@InputType()
export class CreateBoyInput {
  @Field()
  @MinLength(3)
  readonly name: string;

  @Field()
  readonly leftTime: Date;

  @Field()
  readonly arrivalTime: Date;
}
