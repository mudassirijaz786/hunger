import { Test, TestingModule } from '@nestjs/testing';
import { EntreesService } from './entrees.service';

describe('EntreesService', () => {
  let service: EntreesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntreesService],
    }).compile();

    service = module.get<EntreesService>(EntreesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
