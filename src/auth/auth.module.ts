import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from '../customers/customer.entity';
import { CustomersModule } from '../customers/customers.module';

import { AuthOptionsService } from './auth-options.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'kwan$0',
        signOptions: {
          expiresIn: 86400,
        },
      }),
    }),
    PassportModule.registerAsync({
      useClass: AuthOptionsService,
    }),
    TypeOrmModule.forFeature([Customer]),
    CustomersModule,
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
