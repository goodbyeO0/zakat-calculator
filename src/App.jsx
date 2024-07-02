import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Perniagaan from "./Pages/Perniagaan";
import Pendapatan from "./Pages/Pendapatan";
import Emas from "./Pages/Emas";
import WangSimpanan from "./Pages/WangSimpanan";
import Navbar from "./components/Navbar";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/perniagaan" element={<Perniagaan />} />
            <Route path="/pendapatan" element={<Pendapatan />} />
            <Route path="/emas" element={<Emas />} />
            <Route path="/wangSimpanan" element={<WangSimpanan />} />
          </Routes>
        </Router>
      </UserContextProvider >
    </>
  );
}

export default App;
