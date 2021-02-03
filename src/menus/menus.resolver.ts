import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenusService } from './menus.service';
import { Menu } from './entities/menu.entity';
import { CreateMenuInput } from './dto/menus.dto';

@Resolver(() => Menu)
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {}

  @Mutation(() => Menu)
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput) {
    return this.menusService.create(createMenuInput);
  }

  @Query(() => [Menu], { name: 'menus' })
  findAll() {
    return this.menusService.findAll();
  }

  @Query(() => Menu, { name: 'menu' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menusService.findOne(id);
  }

  @Mutation(() => Menu)
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menusService.remove(id);
  }
}
