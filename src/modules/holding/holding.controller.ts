import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe} from '@nestjs/common';
import { HoldingService } from './holding.service';
import { CreateHoldingDto, UpdateHoldingDto } from './holding.entity';

@Controller('holding')
export class HoldingController {
  constructor(private readonly holdingService: HoldingService) {}

  @Get('all')
    async getAllHolding() {
      return await this.holdingService.getAllHoldings();
    }
  @Get('id=:id')
  async findHoldingById(@Param('id', ParseIntPipe) id: number) {
    return await this.holdingService.findHoldingById(id);
  }
  @Get('cripto=:cripto')
  async findHoldingsByCripto(@Param('cripto') cripto: string) {
    return await this.holdingService.findHoldingsByCripto(cripto);
  }
  
  @Post('create')
  async createHolding(@Body() toCreate: CreateHoldingDto) {
    return await this.holdingService.createHolding(toCreate);
  }
  
  @Delete('delete/id=:id')
  async deleteHolding(@Param('id', ParseIntPipe) id: number) {
    return await this.holdingService.deleteHolding(id);
  }
  
  @Put('update/id=:id')
  async updateHolding(@Param('id', ParseIntPipe) id: number, @Body() toUpdate: UpdateHoldingDto) {
    return await this.holdingService.updateHolding(id, toUpdate);
  }
}
