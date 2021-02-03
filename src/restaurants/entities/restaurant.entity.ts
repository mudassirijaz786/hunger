import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant extends Base {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  address: string;

  // Relations
  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];
}
