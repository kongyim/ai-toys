import axios from 'axios';

export const explainText = async (payload: { text: string; level?: string }) => {
  const res = await axios.post('http://localhost:3000/explain', payload);
  return res.data;
};
