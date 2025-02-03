import { ApiProperty } from '@nestjs/swagger';

export class PowerDto {
  @ApiProperty({
    example: '88d90ee9-3e9d-49a4-87b1-cac4a30171d8',
    description: 'UUID',
  })
  id: string;

  @ApiProperty({ example: 'Power', description: 'Name of the power' })
  name: string;
}

export class SuperheroDto {
  @ApiProperty({
    example: 'b1234567-89ab-4cde-f012-3456789abcde',
    description: 'UUID',
  })
  id: string;

  @ApiProperty({ example: 'name', description: 'Name of the superhero' })
  name: string;

  @ApiProperty({ example: 9, description: 'Humility rating (1-10)' })
  humilityRating: number;

  @ApiProperty({
    type: [PowerDto],
    description: 'List of superhero powers (connected or created)',
  })
  powers: PowerDto[];
}
