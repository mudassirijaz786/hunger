import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum CustomersRole {
  CUSTOMER = 'customer',
}

@ObjectType()
@Entity()
export class Customer {
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
  phone: number;

  @Field()
  @Column({
    type: 'enum',
    enum: CustomersRole,
    default: CustomersRole.CUSTOMER,
  })
  role: CustomersRole;

  // Relations
  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
