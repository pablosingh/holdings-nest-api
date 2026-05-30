import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Controller('cripto')
export class CriptoController {
  constructor(private readonly criptoService: CriptoService) {}
  
  @Get('all')
  async getAllCryptos() {
    return await this.criptoService.getAllCriptos();
  }
  @Get('byId/id=:id')
  async findCriptoById(@Param('id') id: number) {
    return await this.criptoService.findCriptoById(id);
  }
  @Get('byCripto/cripto=:cripto')
  async findCriptoByName(@Param('cripto') cripto: string) {
    return await this.criptoService.findCriptoByName(cripto);
  }

  @Post('create')
  async createCripto(@Body() body: any) {
    console.log(body);
    const { cripto, price, updated_price } = body;
    return await this.criptoService.createCripto(cripto, price, updated_price);
  }

  @Delete('delete/id=:id')
  async deleteCrypto(@Param('id') id: any) {
    return await this.criptoService.deleteCripto(id);
  }

  @Put('update')
  async updateCrypto(@Body() body: any) {
    const { id, cripto, price, updated_price } = body;
    return await this.criptoService.updateCripto(id, cripto, price, updated_price);
  }
}
