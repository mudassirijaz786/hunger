import { Field, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  VersionColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Base {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field()
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @Field()
  @VersionColumn()
  readonly version: number;
}
