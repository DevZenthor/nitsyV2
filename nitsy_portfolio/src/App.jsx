import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
// (tu ajouteras les autres après)
// import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible partout */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes futures */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;