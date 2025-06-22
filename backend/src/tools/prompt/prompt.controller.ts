import { Controller, Post, Body } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { CreatePromptDto } from './dto/create-prompt.dto';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @Post()
  async create(@Body() dto: CreatePromptDto) {
    return { prompt: await this.promptService.generatePrompt(dto) };
  }
}
