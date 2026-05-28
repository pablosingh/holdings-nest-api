import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Controller('cripto')
export class CriptoController {
  constructor(private readonly criptoService: CriptoService) {}
  
  @Get('all')
  async getAllCryptos() {
    return await this.criptoService.getAllCriptos();
  }
  @Get(':id')
  async findCriptoById(@Param('id') id: number) {
    return await this.criptoService.findCriptoById(id);
  }

  @Post('create')
  async createCripto(@Body() body: any) {
    console.log(body);
    const { cripto, price, updated_price } = body;
    return await this.criptoService.createCripto(cripto, price, updated_price);
  }

  @Delete('delete/:id')
  async deleteCrypto(@Param('id') id: any) {
    return await this.criptoService.deleteCripto(id);
  }

  @Put('update')
  async updateCrypto(@Body() body: any) {
    const { id, cripto, price, updated_price } = body;
    return await this.criptoService.updateCripto(id, cripto, price, updated_price);
  }
}
