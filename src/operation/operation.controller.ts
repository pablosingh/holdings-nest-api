import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get('all')
  async getAllOperation() {
    return await this.operationService.getAllOperations();
  }
  @Get('byId/id=:id')
  async findOperationById(@Param('id') id: number) {
    return await this.operationService.findOperationById(id);
  }
  @Get('byCripto/cripto=:cripto')
  async findOperationsByCripto(@Param('cripto') cripto: string) {
    return await this.operationService.findOperationsByCripto(cripto);
  }
  @Post('create')
  async createOperation(@Body() body: any) {
    const { cripto, holdingId, date, buy, number, price, total, comment, exchange } = body;
    return await this.operationService.createOperation(cripto, holdingId, date, buy, number, price, total, comment, exchange);
  }

  @Delete('delete/id=:id')
  async deleteOperation(@Param('id') id: number) {
    return await this.operationService.deleteOperation(id);
  }
  
  
  @Put('update')
  async updateOperation(@Body() body: any) {
    const { id, cripto, holdingId, date, buy, number, price, total, comment, exchange } = body;
    return await this.operationService.updateOperation(id, cripto, holdingId, date, buy, number, price, total, comment, exchange);
  }
}
