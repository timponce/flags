import React from "react";
import "./../styles/GiveUp.css";

interface GiveUpProps {
  onGiveUp: () => void;
}

const GiveUp: React.FC<GiveUpProps> = ({ onGiveUp }) => {
  return (
    <button onClick={onGiveUp} className="give-up-button">
      Give Up
    </button>
  );
};

export default GiveUp;
