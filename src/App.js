import React from "react";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PrivatePage from "./components/PrivatePage";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Auth />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
