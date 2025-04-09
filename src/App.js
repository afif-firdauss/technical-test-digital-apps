import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    // Remove any non-numeric characters (including decimals and commas)
    const value = e.target.value.replace(/\D/g, "");

    setInput(value);
  }

  function handleSubmit() {
    if (!input) return;

    // Convert input to number
    const originalNumber = parseInt(input);

    // Get reverse number (automatically handles leading zeros)
    const reversedNumber = parseInt(input.split("").reverse().join(""));

    // Calculate absolute difference
    const difference = Math.abs(originalNumber - reversedNumber);

    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter a number"
          pattern="[0-9]*"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
