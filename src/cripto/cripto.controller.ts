import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Controller('cripto')
export class CriptoController {
  constructor(private readonly criptoService: CriptoService) {}
  
  @Get('all')
  async getAllCryptos() {
    return await this.criptoService.getAllCryptos();
  }

  @Post('create')
  async createCrypto(@Body() body: any) {
    console.log(body);
    const { cripto, price, updated_price } = body;
    return await this.criptoService.createCrypto(cripto, price, updated_price);
  }

  @Delete('delete/:id')
  async deleteCrypto(@Param('id') id: any) {
    return await this.criptoService.deleteCrypto(id);
  }

  @Put('update')
  async updateCrypto(@Body() body: any) {
    const { id, cripto, price, updated_price } = body;
    return await this.criptoService.updateCrypto(id, cripto, price, updated_price);
  }
}
