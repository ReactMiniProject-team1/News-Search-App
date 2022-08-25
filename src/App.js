import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import ClippedPage from "./page/ClippedPage";

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
