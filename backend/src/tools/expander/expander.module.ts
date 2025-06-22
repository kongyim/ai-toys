import { Module } from '@nestjs/common';
import { ExpanderController } from './expander.controller';
import { ExpanderService } from './expander.service';

@Module({
  controllers: [ExpanderController],
  providers: [ExpanderService],
})
export class ExpanderModule {}
