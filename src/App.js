import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClippedPage from "./page/ClippedPage";
import MainPage from "./page/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/clip" element={<ClippedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
