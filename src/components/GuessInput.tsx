import React from "react";
import "./../styles/GuessInput.css";

interface GuessInputProps {
  guess: string;
  setGuess: (value: string) => void;
  handleGuess: () => void;
}

const GuessInput: React.FC<GuessInputProps> = ({
  guess,
  setGuess,
  handleGuess,
}) => {
  return (
    <div className="guess-input-container">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter country name"
        className="guess-input"
      />
      <button onClick={handleGuess} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default GuessInput;
