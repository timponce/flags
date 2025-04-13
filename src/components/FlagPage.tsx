import React from "react";
import { useParams } from "react-router-dom";
import { flags } from "../data/flags";
import "./../styles/FlagPage.css";

const FlagPage: React.FC = () => {
  const { flagCode } = useParams<{ flagCode: string }>();
  const flag = flags.find((f) => f.id === flagCode);

  if (!flag) {
    return <p className="error-message">Flag not found!</p>;
  }

  return (
    <div className="flag-page-container">
      <h1>{flag.name}</h1>
      <img src={flag.image.w640} alt={flag.name} className="flag-page-image" />
    </div>
  );
};

export default FlagPage;
