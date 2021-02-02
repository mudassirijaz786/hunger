import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

import { CustomersRole } from './customers.enum';

@ObjectType()
@Entity()
export class Customer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

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
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field(() => Int)
  @VersionColumn()
  readonly version: number;

  @Field()
  @Column({
    type: 'enum',
    enum: CustomersRole,
    default: CustomersRole.CUSTOMER,
  })
  role: CustomersRole;
}
