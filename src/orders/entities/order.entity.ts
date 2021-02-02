import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Boy } from 'src/boys/entities/boy.entity';
import { Customer } from 'src/customers/entity/customer.entity';
import { Entree } from 'src/entrees/entities/entree.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum deliveryStatus {
  DELIVERED = 'delivered',
  NOT_DELIVERED = 'not_delivered',
  CREATED = 'created',
}

@ObjectType()
@Entity()
export class Order {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @CreateDateColumn()
  readonly time: Date;

  @Field()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field(() => Int)
  @VersionColumn()
  readonly version: number;

  // Writable fields
  @Field()
  @Column({
    type: 'enum',
    enum: deliveryStatus,
    default: deliveryStatus.CREATED,
  })
  status: deliveryStatus;

  // Relations
  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  restaurant: Restaurant;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @ManyToOne(() => Boy, (boy) => boy.orders)
  boy: Boy;
}
