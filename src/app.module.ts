import { Module } from '@nestjs/common';
import { HoldingsController } from './holdings/holdings.controller';
import { HoldingsService } from './holdings/holdings.service';
import { HoldingsModule } from './holdings/holdings.module';

@Module({
  imports: [HoldingsModule],
  controllers: [HoldingsController],
  providers: [HoldingsService],
})
export class AppModule {}
