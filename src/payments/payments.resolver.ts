import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { Payment } from './entities/payment.entity';

@Resolver(() => Payment)
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Mutation(() => Payment)
  @Query(() => [Payment], { name: 'payments' })
  findAll() {
    return this.paymentsService.findAll();
  }
}
