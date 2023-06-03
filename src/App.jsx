import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

import "./App.css";

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
