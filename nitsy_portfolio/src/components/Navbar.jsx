import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/components/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}>
      <div className="container nav-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          Nitsy
        </Link>

        {/* BURGER ICON */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

          <a
            href="https://discord.gg/VepYaxpraG"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;