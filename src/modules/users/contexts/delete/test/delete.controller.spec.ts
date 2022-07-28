import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { DeleteUserController } from '../delete.controller';
import { DeleteUserService } from '../delete.service';

describe('delete test', () => {
  let controller: DeleteUserController;
  let service: DeleteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteUserController],
      providers: [
        {
          provide: DeleteUserService,
          useValue: {
            findOne: jest.fn(),
          },
        },
        JwtAuthGuard,
      ],
    }).compile();

    controller = module.get<DeleteUserController>(DeleteUserController);
    service = module.get<DeleteUserService>(DeleteUserService);
  });

  it('controller and service shold be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
