import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { PrismaClient } from '@prisma/client';
import { formatHeroResponse } from './util';
import { mockDeep } from 'jest-mock-extended';

const mockPrismaClient = mockDeep<PrismaClient>();

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => mockPrismaClient),
}));

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
    mockPrismaClient.hero.create.mockClear();
    mockPrismaClient.hero.findMany.mockClear();
    mockPrismaClient.power.findMany.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addSuperhero', () => {
    it('should create a superhero', async () => {
      const mockHero = {
        id: '1',
        name: 'Test Hero',
        humility_rating: 10,
        powers: [{ power: { name: 'Flying' } }],
      };
      mockPrismaClient.hero.create.mockResolvedValue(mockHero);

      const result = await service.addSuperhero('Test Hero', 10, ['Flying']);

      expect(result).toEqual(formatHeroResponse(mockHero));
    });

    it('should power id is invalid', async () => {
      mockPrismaClient.hero.create.mockRejectedValue({ code: 'P2025' });

      await expect(
        service.addSuperhero('Test Hero', 10, ['Invalid Power']),
      ).rejects.toThrowError(BadRequestException);
    });

    it('should superhero name already exists', async () => {
      mockPrismaClient.hero.create.mockRejectedValue({ code: 'P2002' });

      await expect(
        service.addSuperhero('Test Hero', 10, ['Flying']),
      ).rejects.toThrowError(BadRequestException);
    });

    it('should internal server error', async () => {
      mockPrismaClient.hero.create.mockRejectedValue(new Error('Some error'));

      await expect(
        service.addSuperhero('Test Hero', 10, ['Flying']),
      ).rejects.toThrowError('Some error');
    });
  });

  describe('getAllSuperheroes', () => {
    it('should return all superheroes', async () => {
      const mockHeroes = [
        {
          id: '1',
          name: 'Test Hero',
          humility_rating: 10,
          powers: [{ power: { name: 'Flying' } }],
        },
      ];
      mockPrismaClient.hero.findMany.mockResolvedValue(mockHeroes);

      const result = await service.getAllSuperheroes();

      expect(mockPrismaClient.hero.findMany).toHaveBeenCalledWith({
        orderBy: { humility_rating: 'desc' },
        include: { powers: { include: { power: true } } },
      });
      expect(result).toEqual(mockHeroes.map(formatHeroResponse));
    });
  });

  describe('getAllPowers', () => {
    it('should return all powers', async () => {
      const mockPowers = [{ id: '1', name: 'Flying' }];
      mockPrismaClient.power.findMany.mockResolvedValue(mockPowers);

      const result = await service.getAllPowers();

      expect(mockPrismaClient.power.findMany).toHaveBeenCalledWith({
        select: { id: true, name: true },
      });
      expect(result).toEqual(mockPowers);
    });
  });
});
