import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Missao from "./pages/Missao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contato />} />
        <Route path="/missao" element={<Missao />} />
      </Routes>
    </Router>
  );
}

export default App;
