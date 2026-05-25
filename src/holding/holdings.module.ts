import { Module } from '@nestjs/common';
import { HoldingController } from './holding.controller';
import { HoldingService } from './holding.service';

@Module({
  controllers: [HoldingController],
  providers: [HoldingService],
})
export class HoldingsModule {}
