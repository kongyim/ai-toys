import { Controller, Post, Body } from '@nestjs/common';
import { ExplainerService } from './explainer.service';
import { ExplainTextDto } from './dto/explain-text.dto';

@Controller('explain')
export class ExplainerController {
  constructor(private readonly explainerService: ExplainerService) {}

  @Post()
  async create(@Body() dto: ExplainTextDto) {
    return { explanation: await this.explainerService.explain(dto) };
  }
}
