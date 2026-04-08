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

        <Link className="navbar-brand logo" to="/">
          Nitsy
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li><Link className="nav-link" to="/">Accueil</Link></li>
            <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="nav-link" to="/about">À propos</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>

            <li className="ms-lg-3 mt-3 mt-lg-0">
              <Link className="btn contact-btn" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;