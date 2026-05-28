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
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [HoldingsModule, CriptoModule, OperationModule, DatabaseModule, UserModule],
  controllers: [HoldingController, CriptoController, OperationController, UserController],
  providers: [HoldingService, CriptoService, OperationService, UserService],
})
export class AppModule {}
