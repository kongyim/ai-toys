import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExpandIdeaDto } from './dto/expand-idea.dto';

@Injectable()
export class ExpanderService {
  async expand(dto: ExpandIdeaDto) {
    const formatMap = {
      paragraph: 'as a detailed paragraph',
      list: 'as a list of ideas',
      outline: 'as a structured blog outline',
    };

    const prompt = `Expand the following idea ${formatMap[dto.format || 'paragraph']}:\n${dto.idea}`;

    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt,
      stream: false,
    });

    return res.data.response;
  }
}
