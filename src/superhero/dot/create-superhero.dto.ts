import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  Min,
  Max,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class CreateSuperheroDto {
  @ApiProperty({ example: 'name', description: 'Name of the superhero' })
  @IsString()
  name: string;

  @ApiProperty({ example:  ['88d90ee9-3e9d-49a4-87b1-cac4a30171d8', 'coding'], description: 'Power ids or names' })
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  powers: string[];
  
  @ApiProperty({ example: 9, description: 'Humility rating (1-10)' })
  @IsInt()
  @Min(1)
  @Max(10)
  humilityRating: number;
}

export const createExamples = {
  validWithExistingPower: {
    summary: 'Valid Superhero with Existing Power',
    value: {
      name: 'Sankar',
      humilityRating: 9,
      powers: ['88d90ee9-3e9d-49a4-87b1-cac4a30171d8'],
    },
  },
  validWithNewPower: {
    summary: 'Valid Superhero with New Power',
    value: {
      name: 'Sankar',
      humilityRating: 9,
      powers: ['coding'],
    },
  },
  invalidHumilityRating: {
    summary: 'Invalid Humility Rating',
    value: {
      name: 'Sankar',
      humilityRating: 11,
      powers: ['88d90ee9-3e9d-49a4-87b1-cac4a30171d8'],
    },
  },
};
