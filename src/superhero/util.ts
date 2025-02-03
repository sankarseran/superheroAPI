import { BadRequestException } from "@nestjs/common";
import { SuperheroDto } from "./dot/superhero.dot";
import { v4 as uuidv4, validate as isValidUUID } from 'uuid';

export const preparePowers = async (powers: string[]) => {
  return powers.map((power) =>
    isValidUUID(power)
      ? { power: { connect: { id: power } } }
      : {
          power: {
            connectOrCreate: {
              where: { name: power.toLowerCase() },
              create: { id: uuidv4(), name: power.toLowerCase() },
            },
          },
        },
  );
}

export const formatHeroResponse = (hero: any): SuperheroDto => {
  return {
    id: hero.id,
    name: hero.name,
    humilityRating: hero.humility_rating,
    powers: hero.powers.map((p) => ({ id: p.power.id, name: p.power.name })),
  };
}

export const handleCreateHeroError = (error: any): never => {
  if (error.code === 'P2025') {
    throw new BadRequestException('Provide valid power IDs or names.');
  }
  if (error.code === 'P2002') {
    throw new BadRequestException(
      'This superhero already exists, choose another name.',
    );
  }
  throw error;
}