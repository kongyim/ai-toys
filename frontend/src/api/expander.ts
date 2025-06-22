import axios from 'axios';

export const expandIdea = async (payload: { idea: string; format?: string }) => {
  const res = await axios.post('http://localhost:3000/expand', payload);
  return res.data;
};

