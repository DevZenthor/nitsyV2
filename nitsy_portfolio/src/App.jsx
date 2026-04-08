import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;