import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreatePromptDto } from './dto/create-prompt.dto';

@Injectable()
export class PromptService {
  async generatePrompt(dto: CreatePromptDto) {
    const prompt = `Write a prompt with a ${dto.tone || 'neutral'} tone. Topic: ${dto.topic}`;

    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt,
      stream: false,
    });

    return res.data.response;
  }
}
