import { Controller, Get, Post, Delete, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationDto } from './operation.entity';

@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get('all')
  async getAllOperation() {
    return await this.operationService.getAllOperations();
  }
  @Get('id=:id')
  async findOperationById(@Param('id', ParseIntPipe) id: number) {
    return await this.operationService.findOperationById(id);
  }
  @Get('cripto=:cripto')
  async findOperationsByCripto(@Param('cripto') cripto: string) {
    return await this.operationService.findOperationsByCripto(cripto);
  }

  @Post('create')
  async createOperation(@Body() toCreateOperationDto: OperationDto) {
    return await this.operationService.createOperation(toCreateOperationDto);
  }

  @Delete('delete/id=:id')
  async deleteOperation(@Param('id', ParseIntPipe) id: number) {
    return await this.operationService.deleteOperation(id);
  }
  
  
  @Put('update/id=:id')
  async updateOperation(@Param('id', ParseIntPipe) id: number, @Body() toUpdate: OperationDto) {
    return await this.operationService.updateOperation(id, toUpdate);
  }
}
