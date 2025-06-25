# 🔍 Satyanveshi – AI Code Reviewer

**Satyanveshi** (सत्यन्वेषी – "Seeker of Truth") is a modern AI-powered code review tool built with **React** and **Node.js**. It analyzes JavaScript code and gives instant, meaningful feedback using AI.

---

## ⚙️ Tech Stack

- **Frontend:** React, PrismJS, React Markdown, Highlight.js  
- **Backend:** Node.js, Express, CORS, Gemini AI (via `/ai/get-review`)

---

## 🚀 Features

- ✨ Live syntax-highlighted code editor  
- ⚡ Instant AI-powered code review  
- 📋 Markdown-rendered review suggestions  
- 🧠 Learns from your code patterns  
- 🌐 CORS enabled backend communication

---

## 🧩 Project Structure

Satyanveshi/
├── frontend/ # React-based code editor UI
│ └── src/App.jsx # Core application logic
│
├── backend/ # Node.js Express server
│ └── src/routes/ai.routes.js # AI logic endpoint
│
└── README.md # You’re here!

yaml
Copy
Edit

---

## 🛠️ Setup & Run Locally

### Backend (Node.js)
```bash
cd backend
npm install
npm start
Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm run dev
📦 Important Middleware
Backend app.js includes:

js
Copy
Edit
const express = require('express');
const cors = require('cors');
const aiRoutes = require('../src/routes/ai.routes');

const app = express();
app.use(cors());              // ✅ Enables cross-origin requests
app.use(express.json());      // ✅ Parses incoming JSON
app.use('/ai', aiRoutes);     // ✅ AI Review route

module.exports = app;
🖥️ Frontend Code Highlights
React App.jsx includes:

Code editor via react-simple-code-editor

Syntax highlighting via prismjs

Markdown output with react-markdown + rehype-highlight

axios for communicating with backend

Example:

js
Copy
Edit
const response = await axios.post('http://localhost:3000/ai/get-review', { code });
setReview(response.data);
📌 Example Use Case
js
Copy
Edit
console.log("hello world");
Returns a review with suggestions, context, and best practices powered by AI.

🧑‍💻 Author
Made with ❤️ by TMK
© 2025 Satyanveshi. All rights reserved.