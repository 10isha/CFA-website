import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sa" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
