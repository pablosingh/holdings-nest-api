import { Controller, Get, Post, Delete, Put, Param, Body} from '@nestjs/common';
import { HoldingService } from './holding.service';

@Controller('holding')
export class HoldingController {
  constructor(private readonly holdingService: HoldingService) {}

  @Get('all')
    async getAllHolding() {
      return await this.holdingService.getAllHoldings();
    }
  @Get('byId/id=:id')
  async findHoldingById(@Param('id') id: number) {
    return await this.holdingService.findHoldingById(id);
  }
  @Get('byCripto/cripto=:cripto')
  async findHoldingsByCripto(@Param('cripto') cripto: string) {
    return await this.holdingService.findHoldingsByCripto(cripto);
  }
  
  @Post('create')
  async createHolding(@Body() body: any) {
    const { cripto, userId, date, amount, initialPrice, initialTotal } = body;
    return await this.holdingService.createHolding(cripto, userId, date, amount, initialPrice, initialTotal);
  }
  
  @Delete('delete/id=:id')
  async deleteHolding(@Param('id') id: number) {
    return await this.holdingService.deleteHolding(id);
  }
  
  @Put('update')
  async updateHolding(@Body() body: any) {
    const { id, cripto, userId, date, amount, initialPrice, initialTotal } = body;
    return await this.holdingService.updateHolding(id, cripto, userId, date, amount, initialPrice, initialTotal);
  }
}
