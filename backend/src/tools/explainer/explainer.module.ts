import { Module } from '@nestjs/common';
import { ExplainerController } from './explainer.controller';
import { ExplainerService } from './explainer.service';

@Module({
  controllers: [ExplainerController],
  providers: [ExplainerService],
  exports: [ExplainerService],
})
export class ExplainerModule {}
