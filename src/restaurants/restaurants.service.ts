import { Injectable } from '@nestjs/common';
import { CreateRestaurantInput } from './dto/restaurant.dto';

@Injectable()
export class RestaurantsService {
  create(createRestaurantInput: CreateRestaurantInput) {
    return 'This action adds a new restaurant';
  }

  findAll() {
    return `This action returns all restaurants`;
  }
}
