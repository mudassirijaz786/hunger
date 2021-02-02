import { Test, TestingModule } from '@nestjs/testing';
import { EntreesResolver } from './entrees.resolver';
import { EntreesService } from './entrees.service';

describe('EntreesResolver', () => {
  let resolver: EntreesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntreesResolver, EntreesService],
    }).compile();

    resolver = module.get<EntreesResolver>(EntreesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
