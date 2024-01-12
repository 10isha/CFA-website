import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Course from "./pages/WinterAnalytics";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/coarse" element={<Course />}></Route>
      </Routes>
    </>
  );
}

export default App;
