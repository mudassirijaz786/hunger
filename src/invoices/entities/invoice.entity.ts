import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Invoice extends Base {
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
