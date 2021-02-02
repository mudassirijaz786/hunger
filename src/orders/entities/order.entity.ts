import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Customer } from 'src/customers/entity/customer.entity';
import { Entree } from 'src/entrees/entities/entree.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Order {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  restaurant: Restaurant;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @Field()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field(() => Int)
  @VersionColumn()
  readonly version: number;
}
