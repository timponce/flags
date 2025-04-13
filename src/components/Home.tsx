import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flags } from "../data/flags";
import GuessInput from "./GuessInput";
import GiveUp from "./GiveUp";
import FlagDisplay from "./FlagDisplay";
import ScrollingBanner from "./ScrollingBanner";
import { useCorrectAnswers } from "../context/CorrectAnswersContext";
import "./../styles/Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addCorrectAnswer } = useCorrectAnswers();

  const [currentFlag, setCurrentFlag] = useState(
    () => flags[Math.floor(Math.random() * flags.length)]
  );
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleGuess = () => {
    const normalizedGuess = guess.trim().toLowerCase();
    const isCorrect =
      normalizedGuess === currentFlag.name.toLowerCase() ||
      currentFlag.aliases.some(
        (alias) => normalizedGuess === alias.toLowerCase()
      );

    if (isCorrect) {
      addCorrectAnswer(currentFlag.id);
      setResult(
        `✅ Correct! Visit the country page: ` +
          `<a href="/${currentFlag.id}" class="country-link">${currentFlag.name} ${currentFlag.emoji}</a>`
      );
    } else {
      setResult("❌ Incorrect!");
    }
  };

  const nextFlag = () => {
    setCurrentFlag(flags[Math.floor(Math.random() * flags.length)]);
    setGuess("");
    setResult(null);
    setIsDisabled(false); // Re-enable input and button for the next flag
  };

  const giveUp = () => {
    setResult(
      `❌ The correct answer is: ` +
        `<a href="/${currentFlag.id}" class="country-link">${currentFlag.name}</a>`
    );
    setIsDisabled(true); // Disable input and button when the user gives up
  };

  return (
    <div className="app-container">
      <h1>Guess the Flag</h1>
      <ScrollingBanner />
      <FlagDisplay image={currentFlag.image.svg} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuess={handleGuess}
        disabled={isDisabled}
      />
      <div className="button-container">
        <button onClick={() => navigate("/all")} className="all-button">
          See All
        </button>
        <GiveUp onGiveUp={giveUp} />
        <button onClick={nextFlag} className="next-flag-button">
          Next Flag
        </button>
      </div>
      {result && (
        <p
          className="result-message"
          dangerouslySetInnerHTML={{ __html: result }}
        ></p>
      )}
    </div>
  );
};

export default Home;
