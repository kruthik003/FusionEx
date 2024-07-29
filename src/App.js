import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Speakers from "./pages/Speakers/Speakers";
import Partners from "./pages/Partners/Partners";
import Passes from "./pages/Passes/Passes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="chief_guests" element={<Speakers />} />
        <Route path="partners" element={<Partners />} />
        <Route path="passes" element={<Passes />} />
      </Routes>
    </>
  );
}

export default App;
