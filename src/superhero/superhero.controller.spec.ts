import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { PrismaClient } from '@prisma/client';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        SuperheroService,
        {
          provide: PrismaClient,
          useValue: {
            hero: {
              create: jest.fn(),
              findMany: jest.fn(),
            },
            power: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
