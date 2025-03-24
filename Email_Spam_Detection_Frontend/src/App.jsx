import { useState } from "react";

function App() {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");

  const handleCheckSpam = async () => {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_text: emailText }),
    });

    const data = await response.json();
    setResult(data.result || "Error processing request");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Email Spam Detector</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your email text here..."
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <br />
      <button onClick={handleCheckSpam} style={{ marginTop: "10px" }}>
        Check Spam
      </button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
