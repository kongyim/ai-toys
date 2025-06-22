import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PromptGenerator from './pages/PromptGenerator';
import TextExplainer from './pages/TextExplainer';
import CodeReviewBot from './pages/CodeReviewBot';
import IdeaExpander from './pages/IdeaExpander';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tools/prompt-generator" element={<PromptGenerator />} />
        <Route path="/tools/text-explainer" element={<TextExplainer />} />
        <Route path="/tools/code-review-bot" element={<CodeReviewBot />} />
        <Route path="/tools/idea-expander" element={<IdeaExpander />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
