import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EntreesService } from './entrees.service';
import { Entree } from './entities/entree.entity';
import { CreateEntreeInput } from './dto/entree.dto';

@Resolver(() => Entree)
export class EntreesResolver {
  constructor(private readonly entreesService: EntreesService) {}

  @Mutation(() => Entree)
  createEntree(
    @Args('createEntreeInput') createEntreeInput: CreateEntreeInput,
  ) {
    return this.entreesService.create(createEntreeInput);
  }

  @Query(() => [Entree], { name: 'entrees' })
  findAll() {
    return this.entreesService.findAll();
  }

  @Query(() => Entree, { name: 'entree' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entreesService.findOne(id);
  }

  @Mutation(() => Entree)
  removeEntree(@Args('id', { type: () => Int }) id: number) {
    return this.entreesService.remove(id);
  }
}
