import { Injectable } from '@nestjs/common';
import { CreateEntreeInput } from './dto/entree.dto';

@Injectable()
export class EntreesService {
  create(createEntreeInput: CreateEntreeInput) {
    return 'This action adds a new entree';
  }

  findAll() {
    return `This action returns all entrees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entree`;
  }

  remove(id: number) {
    return `This action removes a #${id} entree`;
  }
}
