import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Course from "./pages/WinterAnalytics";
import MainPage from "./pages/mainPage";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/coarse" element={<Course />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
