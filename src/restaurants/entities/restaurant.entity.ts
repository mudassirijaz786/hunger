import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Menu } from 'src/menus/entities/menu.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  address: string;

  // Restaurant has zero or more menus
  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  // Restaurant has zero or more orders
  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];

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
