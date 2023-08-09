import { Test, TestingModule } from '@nestjs/testing';
import { CornerController } from './corner.controller';
import { CornerService } from './corner.service';

describe('CornerController', () => {
  let controller: CornerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CornerController],
      providers: [CornerService],
    }).compile();

    controller = module.get<CornerController>(CornerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
