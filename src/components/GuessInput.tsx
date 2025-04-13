import React from "react";
import "./../styles/GuessInput.css";

interface GuessInputProps {
  guess: string;
  setGuess: (value: string) => void;
  handleGuess: () => void;
  disabled: boolean; // New prop to disable input and button
}

const GuessInput: React.FC<GuessInputProps> = ({
  guess,
  setGuess,
  handleGuess,
  disabled,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !disabled) {
      handleGuess();
    }
  };

  return (
    <div className="guess-input-container">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter country name"
        className="guess-input"
        disabled={disabled} // Disable input when `disabled` is true
      />
      <button
        onClick={handleGuess}
        className="submit-button"
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};

export default GuessInput;
