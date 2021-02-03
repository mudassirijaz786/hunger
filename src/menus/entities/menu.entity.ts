import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { Entree } from 'src/entrees/entities/entree.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Menu extends Base {
  @Field()
  @Column()
  name: string;

  // Relations
  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;

  @OneToMany(() => Entree, (entree) => entree.menu)
  entrees: Entree[];
}
