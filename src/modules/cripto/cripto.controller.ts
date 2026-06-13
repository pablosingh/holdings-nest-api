import { Controller, Get, Post, Delete, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CriptoService } from './cripto.service';
import { Cripto, CriptoDto } from './cripto.entity';

@Controller('cripto')
export class CriptoController {
  constructor(private readonly criptoService: CriptoService) {}
  
  @Get('all')
  async getAllCryptos() {
    return await this.criptoService.getAllCriptos();
  }
  @Get('/id=:id')
  async findCriptoById(@Param('id', ParseIntPipe) id: number) {
    return await this.criptoService.findCriptoById(id);
  }
  @Get('/cripto=:cripto')
  async findCriptoByName(@Param('cripto') cripto: string) {
    return await this.criptoService.findCriptoByName(cripto);
  }

  @Post('create')
  async createCripto(@Body() toCreate: Cripto) {
    console.log(toCreate);
    const { cripto, price, updated_price } = toCreate;
    return await this.criptoService.createCripto(cripto, price, updated_price);
  }

  @Delete('delete/id=:id')
  async deleteCrypto(@Param('id', ParseIntPipe) id: number) {
    return await this.criptoService.deleteCripto(id);
  }

  @Put('update/id=:id')
  async updateCrypto(@Param('id', ParseIntPipe) id: number, @Body() toUpdate: CriptoDto) {
    return await this.criptoService.updateCripto(id, toUpdate);
  }
}
