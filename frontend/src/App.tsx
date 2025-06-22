import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">🧰 AI Toys Gallery</h1>
      <ul className="list-disc pl-4">
        <li>
          <Link className="text-blue-600 underline" to="/tools/prompt-generator">
            Prompt Generator
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" to="/tools/text-explainer">
            Text Explainer
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" to="/tools/code-review-bot">
            Code Review Bot
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" to="/tools/idea-expander">
            Idea Expander
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
