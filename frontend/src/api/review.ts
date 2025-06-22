import axios from 'axios';

export const reviewCode = async (payload: { code: string; language?: string }) => {
  const res = await axios.post('http://localhost:3000/review', payload);
  return res.data;
};
