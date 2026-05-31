import { Module } from '@nestjs/common';
import { HoldingController } from './holding.controller';
import { HoldingService } from './holding.service';
import { DatabaseModule } from 'src/modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HoldingController],
  providers: [HoldingService],
})
export class HoldingsModule {}
