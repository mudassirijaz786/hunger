import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Menu } from 'src/menus/entities/menu.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Entree extends Base {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  price: number;

  // Relations
  @Field(() => Menu)
  @ManyToOne(() => Menu, (menu) => menu.entrees)
  menu: Menu;
}
