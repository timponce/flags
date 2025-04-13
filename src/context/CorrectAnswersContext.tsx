import React, { createContext, useContext, useState, useEffect } from "react";

interface CorrectAnswersContextType {
  correctAnswers: string[];
  addCorrectAnswer: (flagId: string) => void;
}

const CorrectAnswersContext = createContext<CorrectAnswersContextType | null>(
  null
);

export const CorrectAnswersProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(() => {
    // Load initial state from localStorage
    const storedAnswers = localStorage.getItem("correctAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : [];
  });

  const addCorrectAnswer = (flagId: string) => {
    if (!correctAnswers.includes(flagId)) {
      const updatedAnswers = [...correctAnswers, flagId];
      setCorrectAnswers(updatedAnswers);
      localStorage.setItem("correctAnswers", JSON.stringify(updatedAnswers)); // Save to localStorage
    }
  };

  useEffect(() => {
    // Sync state with localStorage on changes
    localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
  }, [correctAnswers]);

  return (
    <CorrectAnswersContext.Provider
      value={{ correctAnswers, addCorrectAnswer }}
    >
      {children}
    </CorrectAnswersContext.Provider>
  );
};

export const useCorrectAnswers = () => {
  const context = useContext(CorrectAnswersContext);
  if (!context) {
    throw new Error(
      "useCorrectAnswers must be used within a CorrectAnswersProvider"
    );
  }
  return context;
};
