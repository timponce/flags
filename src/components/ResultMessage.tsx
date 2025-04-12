import React from "react";
import "./../styles/ResultMessage.css";

interface ResultMessageProps {
  result: string | null;
}

const ResultMessage: React.FC<ResultMessageProps> = ({ result }) => {
  return result ? <p className="result-message">{result}</p> : null;
};

export default ResultMessage;
