import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { path: '/tools/prompt-generator', label: 'Prompt Generator' },
    { path: '/tools/text-explainer', label: 'Text Explainer' },
    { path: '/tools/code-review-bot', label: 'Code Review Bot' },
    { path: '/tools/idea-expander', label: 'Idea Expander' },
  ];

  return (
    <nav className="bg-white shadow mb-6 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          🧰 AI Toys
        </Link>
        <div className="flex gap-4">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium ${
                pathname === path ? 'text-indigo-700 underline' : 'text-gray-700 hover:text-indigo-500'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
