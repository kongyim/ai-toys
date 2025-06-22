import { Controller, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewCodeDto } from './dto/review-code.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() dto: ReviewCodeDto) {
    return { feedback: await this.reviewService.review(dto) };
  }
}
