import React, { useState } from "react";
import { flags } from "./data/flags";
import FlagDisplay from "./components/FlagDisplay";
import GuessInput from "./components/GuessInput";
import ResultMessage from "./components/ResultMessage";
import "./App.css"; // Global styles

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
    <div className="app-container">
      <h1>Guess the Flag</h1>
      <FlagDisplay image={currentFlag.image.w320} />
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      <ResultMessage result={result} />
      <button onClick={nextFlag} className="next-flag-button">
        Next Flag
      </button>
    </div>
  );
};

export default App;
