import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
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

export enum PaymentType {
  CASH = 'cash',
  DEBIT = 'debit',
  CREDIT = 'credit',
}

@ObjectType()
@Entity()
export class Payment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field()
  @CreateDateColumn()
  readonly paymentDate: Date;

  @Field(() => Int)
  @VersionColumn()
  readonly version: number;

  // Writable fields

  @Field()
  @Column({
    type: 'enum',
    enum: PaymentType,
    default: PaymentType.CASH,
  })
  type: PaymentType;

  @Field()
  @Column()
  amountPaid: number;

  // Relations
  @OneToMany(() => Order, (order) => order.invoice)
  orders: Order[];

  @OneToOne(() => Invoice, (invoice) => invoice.payment)
  @JoinColumn()
  invoice: Invoice;
}
