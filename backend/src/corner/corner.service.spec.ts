import { Test, TestingModule } from '@nestjs/testing';
import { CornerService } from './corner.service';

describe('CornerService', () => {
  let service: CornerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CornerService],
    }).compile();

    service = module.get<CornerService>(CornerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
