import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ReviewCodeDto } from './dto/review-code.dto';

@Injectable()
export class ReviewService {
  async review(dto: ReviewCodeDto) {
    const lang = dto.language ? ` in ${dto.language}` : '';
    const prompt = `Please review the following code${lang}, and provide suggestions or improvements:\n${dto.code}`;

    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt,
      stream: false,
    });

    return res.data.response;
  }
}
