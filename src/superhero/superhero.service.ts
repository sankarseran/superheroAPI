import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SuperheroDto } from './dot/superhero.dot';
import { formatHeroResponse, handleCreateHeroError, preparePowers } from './util';

@Injectable()
export class SuperheroService {
  private prisma = new PrismaClient();

  async addSuperhero(
    name: string,
    humilityRating: number,
    powers: string[],
  ): Promise<SuperheroDto> {
    try {
      const hero = await this.prisma.hero.create({
        data: {
          name: name.toLowerCase(),
          humility_rating: humilityRating,
          powers: {
            create: await preparePowers(powers),
          },
        },
        include: {
          powers: { include: { power: true } },
        },
      });

      return formatHeroResponse(hero);
    } catch (error) {
      return handleCreateHeroError(error);
    }
  }

  async getAllSuperheroes(): Promise<SuperheroDto[]> {
    const heroes = await this.prisma.hero.findMany({
      orderBy: { humility_rating: 'desc' },
      include: { powers: { include: { power: true } } },
    });

    return heroes.map(formatHeroResponse);
  }

  async getAllPowers(): Promise<{ id: string; name: string }[]> {
    return this.prisma.power.findMany({ select: { id: true, name: true } });
  }
}
