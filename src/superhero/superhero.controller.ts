import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SuperheroService } from './superhero.service';
import { createExamples, CreateSuperheroDto } from './dot/create-superhero.dto';
import { SuperheroDto, PowerDto } from './dot/superhero.dot';

@ApiTags('Superheroes')
@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  @ApiOperation({
    summary: 'Add a new superhero',
    description:
      'Creates a new superhero with a name, humility rating, and powers.',
  })
  @ApiBody({
    type: CreateSuperheroDto,
    description:
      'Provide superhero details including name, humility rating, and powers (ids or names).',
    examples: createExamples,
  })
  @ApiResponse({
    status: 201,
    description: 'Superhero added successfully.',
    type: SuperheroDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. Something went wrong on the server.',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    try {
      const result = await this.superheroService.addSuperhero(
        createSuperheroDto.name,
        createSuperheroDto.humilityRating,
        createSuperheroDto.powers,
      );
      return { message: 'Hero created successfully', result };
    } catch (error) {
      console.error('Error creating person:', error, typeof error);
      console.error('typeof error:', typeof error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create Superhero');
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all superheroes',
    description:
      'Fetches all superheroes sorted by humility rating in descending order.',
  })
  @ApiResponse({
    status: 200,
    description: 'Superheroes retrieved successfully.',
    type: [SuperheroDto],
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. Something went wrong on the server.',
  })
  async getAllSuperheroes() {
    return this.superheroService.getAllSuperheroes();
  }

  @Get('powers')
  @ApiOperation({
    summary: 'Retrieve all powers',
  })
  @ApiResponse({
    status: 200,
    description: 'List of powers retrieved successfully.',
    type: [PowerDto],
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. Something went wrong on the server.',
  })
  async getAllPowers() {
    return this.superheroService.getAllPowers();
  }
}
