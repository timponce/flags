import React from "react";
import "./../styles/FlagDisplay.css";

interface FlagDisplayProps {
  image: string;
}

const FlagDisplay: React.FC<FlagDisplayProps> = ({ image }) => {
  return (
    <div className="flag-container">
      <img src={image} alt="flag" className="flag-image" />
    </div>
  );
};

export default FlagDisplay;
