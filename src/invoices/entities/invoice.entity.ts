import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Invoice {
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

  // Writable fields

  @Field()
  @Column()
  foodDetails: string;

  @Field()
  @Column()
  balanceDue: number;

  @Field()
  @Column()
  adjustment: number;

  // Relations
  @OneToMany(() => Order, (order) => order.invoice)
  orders: Order[];

  @OneToOne(() => Payment, (payment) => payment.invoice)
  payment: Payment;
}
