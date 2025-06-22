import { useState } from 'react';
import { explainText } from '../api/explainer';
import Navbar from '../components/Navbar';

export default function TextExplainer() {
  const [text, setText] = useState('');
  const [level, setLevel] = useState('simple');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    const res = await explainText({ text, level });
    setResult(res.explanation);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-2">📖 Text Explainer</h2>
        <textarea
          placeholder="Enter text to explain"
          className="w-full border p-2 mb-2"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-2"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="simple">Plain English</option>
          <option value="child">Explain to a child</option>
          <option value="professional">Professional style</option>
        </select>
        <button
          onClick={handleExplain}
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Explaining...' : 'Explain Text'}
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
