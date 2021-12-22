import React from "react";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import PrivatePage from "./components/pages/PrivatePage";
import ErrorPage from "./components/pages/ErrorPage";
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
