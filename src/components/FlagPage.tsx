import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { flags } from "../data/flags";
import "./../styles/FlagPage.css";

const FlagPage: React.FC = () => {
  const { flagCode } = useParams<{ flagCode: string }>();
  const navigate = useNavigate();

  const flag = flags.find((f) => f.id === flagCode);

  if (!flag) {
    return <p className="error-message">Flag not found!</p>;
  }

  return (
    <div className="flag-page-container">
      <h1>{flag.name}</h1>
      <img src={flag.image.svg} alt={flag.name} className="flag-page-image" />
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
};

export default FlagPage;
