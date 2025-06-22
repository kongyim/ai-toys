import { useState } from 'react';
import { generatePrompt } from '../api/prompt';
import Navbar from '../components/Navbar';

export default function PromptGenerator() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('neutral');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await generatePrompt({ topic, tone });
    setResult(res.prompt);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-2">🧠 Prompt Generator</h2>
        <input
          type="text"
          placeholder="Enter a topic"
          className="w-full border p-2 mb-2"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-2"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="neutral">Neutral</option>
          <option value="professional">Professional</option>
          <option value="humorous">Humorous</option>
          <option value="encouraging">Encouraging</option>
        </select>
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Prompt'}
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
