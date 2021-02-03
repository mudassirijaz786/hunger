import { Injectable } from '@nestjs/common';
import { CreateBoyInput } from './dto/boy.dto';

@Injectable()
export class BoysService {
  create(createBoyInput: CreateBoyInput) {
    return 'This action adds a new boy';
  }

  findAll() {
    return `This action returns all boys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boy`;
  }

  remove(id: number) {
    return `This action removes a #${id} boy`;
  }
}
