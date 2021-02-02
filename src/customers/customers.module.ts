import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthOptionsService } from '../auth/auth-options.service';

import { Customer } from './customer.entity';
import { UsersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';

@Module({
  imports: [
    PassportModule.registerAsync({
      useClass: AuthOptionsService,
    }),
    TypeOrmModule.forFeature([Customer]),
  ],
  providers: [UsersResolver, CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
