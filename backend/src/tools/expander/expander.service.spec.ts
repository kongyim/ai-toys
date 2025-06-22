import { Test, TestingModule } from '@nestjs/testing';
import { ExpanderService } from './expander.service';

describe('ExpanderService', () => {
  let service: ExpanderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpanderService],
    }).compile();

    service = module.get<ExpanderService>(ExpanderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
