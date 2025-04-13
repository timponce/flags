import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FlagPage from "./components/FlagPage";
import AllFlagsPage from "./components/AllFlagsPage";
import ScrollingBanner from "./components/ScrollingBanner";
import { CorrectAnswersProvider } from "./context/CorrectAnswersContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <CorrectAnswersProvider>
      <Router>
        <div className="app-container">
          <ScrollingBanner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:flagCode" element={<FlagPage />} />
            <Route path="/all" element={<AllFlagsPage />} />
          </Routes>
        </div>
      </Router>
    </CorrectAnswersProvider>
  );
};

export default App;
