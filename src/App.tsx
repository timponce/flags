import React, { useState } from "react";
import { flags } from "./data/flags";

const App: React.FC = () => {
  const [currentFlag, setCurrentFlag] = useState(
    () => flags[Math.floor(Math.random() * flags.length)]
  );
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === currentFlag.country.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult("Incorrect!");
    }
  };

  const nextFlag = () => {
    setCurrentFlag(flags[Math.floor(Math.random() * flags.length)]);
    setGuess("");
    setResult(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Guess the Flag</h1>
      <img
        src={currentFlag.image.large}
        alt="flag"
        style={{ width: "200px", height: "auto" }}
      />
      <div>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter country name"
        />
        <button onClick={handleGuess}>Submit</button>
      </div>
      {result && <p>{result}</p>}
      <button onClick={nextFlag}>Next Flag</button>
    </div>
  );
};

export default App;
