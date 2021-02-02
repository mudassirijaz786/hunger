import { InputType, Field, PickType } from '@nestjs/graphql';
import { IsAlphanumeric, MinLength } from 'class-validator';

@InputType()
export class CreateBoyInput {
  @Field()
  @IsAlphanumeric()
  readonly id: number;

  @Field()
  @MinLength(3)
  readonly name: string;

  @Field()
  readonly leftTime: Date;

  @Field()
  readonly arrivalTime: Date;
}

@InputType()
export class UpdateBoyInput extends PickType(CreateBoyInput, ['id'] as const) {}
