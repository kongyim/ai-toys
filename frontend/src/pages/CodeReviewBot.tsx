import { useState } from 'react';
import { reviewCode } from '../api/review';

export default function CodeReviewBot() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    const res = await reviewCode({ code, language });
    setResult(res.feedback);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">🧑‍💻 Code Review Bot</h2>
      <select
        className="w-full border p-2 mb-2"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>Python</option>
        <option>Java</option>
        <option>C++</option>
      </select>
      <textarea
        placeholder="Paste your code here"
        className="w-full border p-2 mb-2 font-mono"
        rows={8}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={handleReview}
        className="bg-purple-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Reviewing...' : 'Review Code'}
      </button>

      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-100 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}
