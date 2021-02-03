import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Base } from 'src/base/base.entity';
import { Order } from 'src/orders/entities/order.entity';

import { Column, Entity, Index, OneToMany } from 'typeorm';

export enum CustomersRole {
  CUSTOMER = 'customer',
}

@ObjectType()
@Entity()
export class Customer extends Base {
  @Field()
  @Index({ unique: true })
  @Column()
  username: string;

  @Field()
  @Index({ unique: true })
  @Column()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column()
  street: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column({
    type: 'enum',
    enum: CustomersRole,
    default: CustomersRole.CUSTOMER,
  })
  role: CustomersRole;

  // Relations
  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.customer, { eager: true })
  orders: Order[];
}
