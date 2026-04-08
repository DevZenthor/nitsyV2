import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/components/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : "navbar-top"}`}>
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand logo" to="/">
          Nitsy
        </Link>

        {/* MENU */}
        <div className="ms-auto d-flex align-items-center">

          <Link className="nav-link" to="/">Accueil</Link>
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
          <Link className="nav-link" to="/clients">Clients</Link>
          <Link className="nav-link" to="/services">Services</Link>

          {/* CONTACT = DISCORD */}
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