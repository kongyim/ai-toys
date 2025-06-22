import { Test, TestingModule } from '@nestjs/testing';
import { ExplainerController } from './explainer.controller';

describe('ExplainerController', () => {
  let controller: ExplainerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExplainerController],
    }).compile();

    controller = module.get<ExplainerController>(ExplainerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
