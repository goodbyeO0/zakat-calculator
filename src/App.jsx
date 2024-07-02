import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Calculator from "./Pages/Calculator";
import Perniagaan from "./Pages/Perniagaan";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/perniagaan" element={<Perniagaan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
