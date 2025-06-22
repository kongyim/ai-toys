import { useState } from 'react';
import { expandIdea } from '../api/expander';
import Navbar from '../components/Navbar';

export default function IdeaExpander() {
  const [idea, setIdea] = useState('');
  const [format, setFormat] = useState('paragraph');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExpand = async () => {
    setLoading(true);
    const res = await expandIdea({ idea, format });
    setResult(res.expansion);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-2">🧠 Idea Expander</h2>
        <textarea
          placeholder="Enter a short idea"
          className="w-full border p-2 mb-2"
          rows={4}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-2"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="paragraph">Paragraph</option>
          <option value="list">List</option>
          <option value="outline">Blog Outline</option>
        </select>
        <button
          onClick={handleExpand}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Expanding...' : 'Expand Idea'}
        </button>

        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-100 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
