import { Module } from '@nestjs/common';
import { EntreesService } from './entrees.service';
import { EntreesResolver } from './entrees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entree } from './entities/entree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entree])],
  providers: [EntreesResolver, EntreesService],
})
export class EntreesModule {}
