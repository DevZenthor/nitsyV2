import "../styles/components/Footer.css";
import { FaTiktok, FaYoutube, FaTwitch, FaTwitter, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">

        {/* SOCIALS */}
        <div className="socials">

          <a
            href="https://discord.gg/VepYaxpraG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>

          <a
            href="https://www.tiktok.com/@znitsyfn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.youtube.com/@NitsyFnbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.twitch.tv/znitsyfn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch />
          </a>

          <a
            href="https://x.com/NitsyFnbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

        </div>

        {/* LEGAL */}
        <p className="legal">
          © {new Date().getFullYear()} Nitsy —
          <Link to="/mentions"> Mentions légales</Link>
        </p>

        {/* DEV */}
        <p className="dev">
          Dev by <strong>Zenthor</strong>
        </p>

      </div>
    </footer>
  );
}

export default Footer;