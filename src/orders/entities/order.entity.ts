import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Boy } from 'src/boys/entities/boy.entity';
import { Customer } from 'src/customers/entity/customer.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum deliveryStatus {
  DELIVERED = 'delivered',
  NOT_DELIVERED = 'not_delivered',
  CREATED = 'created',
}

@ObjectType()
@Entity()
export class Order extends Base {
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

  @ManyToOne(() => Invoice, (invoice) => invoice.orders)
  invoice: Invoice;
}
