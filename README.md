# 🧰 AI Toys

A collection of local AI-powered tools built with **NestJS** (backend), **React + Vite** (frontend), and powered by **Llama3 via Ollama**. This suite helps you learn and demonstrate fullstack AI integration without relying on paid APIs.

---

## ✨ Tools Included

| Tool              | Description                                          |
|-------------------|------------------------------------------------------|
| 🧠 Prompt Generator | Create well-formed prompts in different tones       |
| 📖 Text Explainer   | Simplify or rephrase text based on difficulty       |
| 🧑‍💻 Code Review Bot | Review code snippets with improvement suggestions   |
| 💡 Idea Expander    | Expand a brief idea into full content formats       |

---

## 🧱 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** NestJS + TypeScript + Axios
- **Model Runtime:** Ollama + Llama3 (runs locally)

---

## 🟢 Getting Started

### 1. Install Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Ollama](https://ollama.com/) (local LLM runtime)

---

### 2. Start Ollama

```bash
ollama run llama3
```

Leave this terminal open. It will serve the LLM API at `http://localhost:11434`.

---

### 3. Start Backend

```bash
cd backend
npm install
npm run start
```

The backend runs on `http://localhost:3000`

---

### 4. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will be served at `http://localhost:5173`

---

## 🖼 UI Features

- Top navigation bar for quick tool access
- Mobile responsive grid layout
- Each tool is isolated and has its own input and output UX

---

## 📁 Folder Structure

```
ai-toys/
├── backend/
│   └── src/tools/
│       ├── prompt/
│       ├── explainer/
│       ├── review/
│       └── expander/
├── frontend/
│   └── src/
│       ├── pages/
│       ├── components/
│       └── api/
```

---

## 📌 Notes

- No OpenAI keys required
- Everything runs 100% locally
- Prompt logic and structure fully customizable

---

## 📄 License

MIT

---

## 🙌 Acknowledgements

- [Ollama](https://ollama.com)
- [Llama3 by Meta](https://llama.meta.com)
- [NestJS](https://nestjs.com)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
