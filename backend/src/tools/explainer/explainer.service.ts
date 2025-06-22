import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExplainTextDto } from './dto/explain-text.dto';

@Injectable()
export class ExplainerService {
  async explain(dto: ExplainTextDto) {
    const styleMap = {
      simple: 'in plain English',
      child: 'like you’re talking to a 10-year-old',
      professional: 'with professional terminology',
    };

    const prompt = `Explain the following text ${styleMap[dto.level || 'simple']}:\n${dto.text}`;

    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt,
      stream: false,
    });

    return res.data.response;
  }
}
