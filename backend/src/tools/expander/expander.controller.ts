import { Controller, Post, Body } from '@nestjs/common';
import { ExpanderService } from './expander.service';
import { ExpandIdeaDto } from './dto/expand-idea.dto';

@Controller('expand')
export class ExpanderController {
  constructor(private readonly expanderService: ExpanderService) {}

  @Post()
  async create(@Body() dto: ExpandIdeaDto) {
    return { expansion: await this.expanderService.expand(dto) };
  }
}
