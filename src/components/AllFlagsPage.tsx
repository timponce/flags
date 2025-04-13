import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { flags } from "../data/flags";
import { useCorrectAnswers } from "../context/CorrectAnswersContext";
import "./../styles/AllFlagsPage.css";

const AllFlagsPage: React.FC = () => {
  const navigate = useNavigate();
  const { correctAnswers } = useCorrectAnswers();

  return (
    <div className="all-flags-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <h1>
        All Flags ({correctAnswers.length}/{flags.length})
      </h1>
      <div className="all-flags-grid">
        {flags.map((flag) => (
          <div
            key={flag.id}
            className={`flag-item-all ${
              correctAnswers.includes(flag.id) ? "faded" : ""
            }`}
          >
            <a key={flag.id} href={`/${flag.id}`} title={flag.name}>
              <img
                src={flag.image.icon}
                alt={flag.name}
                className="flag-image-all"
              />
            </a>
            <p>{flag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFlagsPage;
