import axios from 'axios';

export const generatePrompt = async (payload: { topic: string; tone?: string }) => {
  const res = await axios.post('http://localhost:3000/prompt', payload);
  return res.data;
};
