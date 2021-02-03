import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoicesService } from './invoices.service';
import { Invoice } from './entities/invoice.entity';
import { CreateInvoiceInput } from './dto/invoice.dto';

@Resolver(() => Invoice)
export class InvoicesResolver {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Mutation(() => Invoice)
  createInvoice(
    @Args('createInvoiceInput') createInvoiceInput: CreateInvoiceInput,
  ) {
    return this.invoicesService.create(createInvoiceInput);
  }

  @Query(() => [Invoice], { name: 'invoices' })
  findAll() {
    return this.invoicesService.findAll();
  }

  @Query(() => Invoice, { name: 'invoice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoicesService.findOne(id);
  }

  @Mutation(() => Invoice)
  removeInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.invoicesService.remove(id);
  }
}
