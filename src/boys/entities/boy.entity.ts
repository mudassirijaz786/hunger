import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Boy extends Base {
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
  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.boy)
  orders: Order[];
}
