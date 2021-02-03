import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoysService } from './boys.service';
import { Boy } from './entities/boy.entity';
import { CreateBoyInput } from './dto/boy.dto';

@Resolver(() => Boy)
export class BoysResolver {
  constructor(private readonly boysService: BoysService) {}

  @Mutation(() => Boy)
  createBoy(@Args('createBoyInput') createBoyInput: CreateBoyInput) {
    return this.boysService.create(createBoyInput);
  }

  @Query(() => [Boy], { name: 'boys' })
  findAll() {
    return this.boysService.findAll();
  }

  @Query(() => Boy, { name: 'boy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boysService.findOne(id);
  }

  @Mutation(() => Boy)
  removeBoy(@Args('id', { type: () => Int }) id: number) {
    return this.boysService.remove(id);
  }
}
