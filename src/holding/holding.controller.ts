import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { HoldingService } from './holding.service';

@Controller('holding')
export class HoldingController {
  constructor(private readonly holdingService: HoldingService) {}

  @Get()
    getAllHolding() {
      return 'This controller returns all holdings';
    }
  
    @Post()
    createHolding() {
      return 'This controller creates a new holding';
    }
  
    @Delete()
    deleteHolding() {
      return 'This controller deletes a holding';
    }
  
    @Put()
    updateHolding() {
      return 'This controller updates a holding';
    }
}
