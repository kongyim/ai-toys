import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './tools/prompt/prompt.module';
import { ExplainerService } from './tools/explainer/explainer.service';
import { ExplainerModule } from './tools/explainer/explainer.module';
import { ReviewModule } from './tools/review/review.module';

@Module({
  imports: [PromptModule, ExplainerModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService, ExplainerService],
})
export class AppModule {}
