import { Module } from '@nestjs/common';
import { HoldingController } from './modules/holding/holding.controller';
import { HoldingService } from './modules/holding/holding.service';
import { HoldingsModule } from './modules/holding/holdings.module';
import { CriptoModule } from './modules/cripto/cripto.module';
import { OperationModule } from './modules/operation/operation.module';
import { OperationController } from './modules/operation/operation.controller';
import { CriptoController } from './modules/cripto/cripto.controller';
import { OperationService } from './modules/operation/operation.service';
import { CriptoService } from './modules/cripto/cripto.service';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [HoldingsModule, CriptoModule, OperationModule, DatabaseModule, UserModule],
  controllers: [HoldingController, CriptoController, OperationController, UserController],
  providers: [HoldingService, CriptoService, OperationService, UserService],
})
export class AppModule {}
