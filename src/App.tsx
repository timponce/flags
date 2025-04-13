import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FlagPage from "./components/FlagPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Dynamic flag pages */}
        <Route path="/:flagCode" element={<FlagPage />} />
      </Routes>
    </Router>
  );
};

export default App;
