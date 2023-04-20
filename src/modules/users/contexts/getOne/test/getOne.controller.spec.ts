import { GetOneUserController } from '../getOne.controller';
import { GetOneUserService } from '../getOne.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('get one test', () => {
  let controller: GetOneUserController;
  let service: GetOneUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOneUserController],
      providers: [
        {
          provide: GetOneUserService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<GetOneUserController>(GetOneUserController);
    service = module.get<GetOneUserService>(GetOneUserService);
  });

  it('controller and service shold be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
