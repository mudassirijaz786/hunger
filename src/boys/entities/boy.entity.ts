import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Boy {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field(() => Int)
  @VersionColumn()
  readonly version: number;

  // Writable Fields
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  leftTime: Date;

  @Field()
  @Column()
  arrivalTime: Date;

  // Relations
  @OneToMany(() => Order, (order) => order.boy)
  orders: Order[];
}
