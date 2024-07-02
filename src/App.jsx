import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from "./Pages/About";
import Calculator from "./Pages/Calculator";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;