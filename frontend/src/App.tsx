import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🧰 AI Toys Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link to="/tools/prompt-generator" className="block p-4 rounded-lg shadow-md bg-white hover:bg-blue-50">
            <h2 className="text-xl font-semibold mb-1">🧠 Prompt Generator</h2>
            <p className="text-sm text-gray-600">Create well-formed prompts in various tones.</p>
          </Link>
          <Link to="/tools/text-explainer" className="block p-4 rounded-lg shadow-md bg-white hover:bg-green-50">
            <h2 className="text-xl font-semibold mb-1">📖 Text Explainer</h2>
            <p className="text-sm text-gray-600">Simplify or rephrase text based on difficulty level.</p>
          </Link>
          <Link to="/tools/code-review-bot" className="block p-4 rounded-lg shadow-md bg-white hover:bg-purple-50">
            <h2 className="text-xl font-semibold mb-1">🧑‍💻 Code Review Bot</h2>
            <p className="text-sm text-gray-600">Get suggestions and improvements for your code.</p>
          </Link>
          <Link to="/tools/idea-expander" className="block p-4 rounded-lg shadow-md bg-white hover:bg-indigo-50">
            <h2 className="text-xl font-semibold mb-1">🧠 Idea Expander</h2>
            <p className="text-sm text-gray-600">Expand a simple idea into detailed content.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;