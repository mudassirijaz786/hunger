import { Module } from '@nestjs/common';
import { EntreesService } from './entrees.service';
import { EntreesResolver } from './entrees.resolver';

@Module({
  providers: [EntreesResolver, EntreesService]
})
export class EntreesModule {}
