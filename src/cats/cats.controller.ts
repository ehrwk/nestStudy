import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
    }
  
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
}