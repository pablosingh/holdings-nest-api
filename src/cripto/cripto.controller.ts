import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Controller('cripto')
export class CriptoController {
  constructor(private readonly criptoService: CriptoService) {}
  
  @Get()
  getAllCryptos() {
    return 'This controller returns all cryptos';
  }

  @Post()
  createCrypto() {
    return 'This controller creates a new crypto';
  }

  @Delete()
  deleteCrypto() {
    return 'This controller deletes a crypto';
  }

  @Put()
  updateCrypto() {
    return 'This controller updates a crypto';
  }
}
