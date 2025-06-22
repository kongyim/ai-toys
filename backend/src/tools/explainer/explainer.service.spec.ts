import { Test, TestingModule } from '@nestjs/testing';
import { ExplainerService } from './explainer.service';

describe('ExplainerService', () => {
  let service: ExplainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExplainerService],
    }).compile();

    service = module.get<ExplainerService>(ExplainerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
