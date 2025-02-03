import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SuperheroService, PrismaService],
  controllers: [SuperheroController]
})
export class SuperheroModule {}
