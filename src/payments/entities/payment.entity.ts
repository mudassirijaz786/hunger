import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

export enum PaymentType {
  CASH = 'cash',
  DEBIT = 'debit',
  CREDIT = 'credit',
}

@ObjectType()
@Entity()
export class Payment extends Base {
  @Field()
  @CreateDateColumn()
  readonly paymentDate: Date;

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
  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.invoice)
  orders: Order[];

  @Field(() => Invoice)
  @OneToOne(() => Invoice, (invoice) => invoice.payment)
  @JoinColumn()
  invoice: Invoice;
}
