import { Test, TestingModule } from '@nestjs/testing';
import { ExpanderController } from './expander.controller';

describe('ExpanderController', () => {
  let controller: ExpanderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpanderController],
    }).compile();

    controller = module.get<ExpanderController>(ExpanderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
