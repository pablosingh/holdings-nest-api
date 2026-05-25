import { Module } from '@nestjs/common';
import { HoldingController } from './holding/holding.controller';
import { HoldingService } from './holding/holding.service';
import { HoldingsModule } from './holding/holdings.module';
import { CriptoModule } from './cripto/cripto.module';
import { OperationModule } from './operation/operation.module';
import { OperationController } from './operation/operation.controller';
import { CriptoController } from './cripto/cripto.controller';
import { OperationService } from './operation/operation.service';
import { CriptoService } from './cripto/cripto.service';

@Module({
  imports: [HoldingsModule, CriptoModule, OperationModule],
  controllers: [HoldingController, CriptoController, OperationController],
  providers: [HoldingService, CriptoService, OperationService],
})
export class AppModule {}
