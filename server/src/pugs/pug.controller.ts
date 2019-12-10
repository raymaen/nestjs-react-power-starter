import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Pug } from './interfaces/pug.interface';
import { PugService } from './pug.service';
import { CreatePugDto } from './dto/create-pug.dto';

@Controller('api/pugs')
export class PugsController {
  constructor(private readonly pugsService: PugService) {}

  @Post()
  async create(@Body() createPugDto: CreatePugDto): Promise<Pug> {
    return await this.pugsService.create(createPugDto);
  }

  @Get()
  async findAll(): Promise<Pug[]> {
    return this.pugsService.findAll();
  }

  @Get(':id')
  async findById(@Param() id): Promise<Pug> {
    return this.pugsService.findById(id);
  }
}
