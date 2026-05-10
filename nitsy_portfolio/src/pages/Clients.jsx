import { useState } from "react";
import "../styles/pages/Clients.css";
import { FaTwitter } from "react-icons/fa";

import client1 from "../assets/1P.jpg";
import client2 from "../assets/hedra.jpg";
import client3 from "../assets/jonax.jpg";
import client4 from "../assets/wycker.jpg";
import client5 from "../assets/Huna.jpg";
import client6 from "../assets/EOZ.jpg";
import client7 from "../assets/ascend.jpg";
import client8 from "../assets/lzs.jpg";
import client9 from "../assets/sleaxyy.jpg";
import client10 from "../assets/Pandaria.jpg";

function Clients() {
  const [filter, setFilter] = useState("all");

  const clients = [
    // ESPORT
    { img: client5,  name: "Huna Esport",     twitter: "https://x.com/Huna_eSport",    category: "esport",  pos: "center center" },
    { img: client6,  name: "EOZ Esport",      twitter: "https://x.com/EOZesport",      category: "esport",  pos: "center center" },
    { img: client7,  name: "Ascend Esport",   twitter: "https://x.com/xteamascend",    category: "esport",  pos: "center center" },
    { img: client8,  name: "Team LZS",        twitter: "https://x.com/lzs_team",       category: "esport",  pos: "center center" },
    { img: client10, name: "Pandaria Esport", twitter: "https://x.com/EsportPandaria", category: "esport",  pos: "center center" },
    { img: client1,  name: "One Prodige",     twitter: "https://x.com/oneprodige",     category: "esport",  pos: "center 15%" },
    { img: client2,  name: "Hedra",           twitter: "https://x.com/HedraFn",        category: "esport",  pos: "center 15%" },
    { img: client9,  name: "Sleaxyy",         twitter: "https://x.com/sleaxyftn",      category: "esport",  pos: "center 10%" },
    // CONTENT CREATOR
    { img: client3,  name: "Jonax",           twitter: "https://x.com/Jonaxfn",        category: "creator", pos: "center 10%" },
    { img: client4,  name: "Wycker",          twitter: "https://x.com/WyckerTv",       category: "creator", pos: "center 15%" },
  ];

  const filtered =
    filter === "all" ? clients : clients.filter((c) => c.category === filter);

  return (
    <section className="clients">
      <div className="container text-center">
        <h2>Mes clients</h2>
        <p>Ils m'ont fait confiance pour leurs projets visuels.</p>

        {/* FILTRES */}
        <div className="filters">
          <button className={filter === "all"     ? "active" : ""} onClick={() => setFilter("all")}>Tous</button>
          <button className={filter === "esport"  ? "active" : ""} onClick={() => setFilter("esport")}>Esport</button>
          <button className={filter === "creator" ? "active" : ""} onClick={() => setFilter("creator")}>Content Creator</button>
        </div>

        <div className="clients-grid">
          {filtered.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="img-wrapper">
                <img
                  src={client.img}
                  alt={client.name}
                  style={{ objectPosition: client.pos }}
                />
              </div>
              <div className="card-info">
                <h4>{client.name}</h4>
                <a href={client.twitter} className="twitter-btn" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="clients-light-right"></div>
      <div className="clients-light-left"></div>
    </section>
  );
}

export default Clients;