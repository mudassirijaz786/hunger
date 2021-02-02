import { Module } from '@nestjs/common';
import { BoysService } from './boys.service';
import { BoysResolver } from './boys.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boy } from './entities/boy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boy])],
  providers: [BoysResolver, BoysService],
})
export class BoysModule {}
