import { InputType, Int, Field, PickType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsAscii, IsEmail, MinLength } from 'class-validator';
import { CreateOrderInput } from 'src/orders/dto/order.dto';
import { Order } from 'src/orders/entities/order.entity';

@InputType()
export class CreateBoyInput {
  @Field()
  @IsAlphanumeric()
  @MinLength(1)
  readonly id: number;

  @Field()
  @IsAlphanumeric()
  @MinLength(1)
  readonly name: string;

  @Field()
  readonly leftTime: Date;

  @Field()
  readonly arrivalTime: Date;
}

@InputType()
export class UpdateBoyInput extends PickType(CreateBoyInput, ['id'] as const) {}
