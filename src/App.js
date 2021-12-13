import React from "react";
import Home from "./components/Home";
import Auth from "./components/auth/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
