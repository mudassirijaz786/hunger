import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Mutation(() => Restaurant)
  createRestaurant(
    @Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput,
  ) {
    return this.restaurantsService.create(createRestaurantInput);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantsService.findAll();
  }
}
