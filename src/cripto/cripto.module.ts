import { Module } from '@nestjs/common';
import { CriptoController } from './cripto.controller';
import { CriptoService } from './cripto.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CriptoController],
  providers: [CriptoService],
})
export class CriptoModule {}
