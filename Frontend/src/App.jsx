import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`console.log("hello world");`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    if (loading) return;

    setLoading(true);
    setReview("Loading...");

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (err) {
      setReview(" Failed to get review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="hero">
        <h1 className="title">
          Welcome to <span className="satya">Satyanveshi</span>
        </h1>
        <p className="tagline">An AI Code Reviewer – Unearthing truth in every line of code.</p>
      </div>

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%",
                backgroundColor: "#161b22",
                color: "#c9d1d9",
                border: "1px solid #30363d",
                borderRadius: "0.7rem"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            {loading ? "Reviewing..." : "Review"}
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>

      <div className="footer">
  Made with ❤️ by TMK<br />
  © {new Date().getFullYear()} Satyanveshi. All rights reserved.
</div>
    </>
  );
}

export default App;
