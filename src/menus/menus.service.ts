import { Injectable } from '@nestjs/common';
import { CreateMenuInput } from './dto/menus.dto';

@Injectable()
export class MenusService {
  create(createMenuInput: CreateMenuInput) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
