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
  const clients = [
    { img: client1, name: "One Prodige", twitter: "https://x.com/oneprodige" },
    { img: client2, name: "Hedra", twitter: "https://x.com/HedraFn" },
    { img: client3, name: "Jonax", twitter: "https://x.com/Jonaxfn" },
    { img: client4, name: "Wycker", twitter: "https://x.com/WyckerTv" },
    { img: client5, name: "Huna Esport", twitter: "https://x.com/Huna_eSport" },
    { img: client6, name: "EOZ Esport", twitter: "https://x.com/EOZesport" },
    { img: client7, name: "Ascend Esport", twitter: "https://x.com/xteamascend" },
    { img: client8, name: "Team LZS", twitter: "https://x.com/lzs_team" },
    { img: client9, name: "Sleaxyy", twitter: "https://x.com/sleaxyftn" },
    { img: client10, name: "Pandaria Esport", twitter: "https://x.com/EsportPandaria" },
  ];

  return (
    <section className="clients">
      <div className="container text-center">

        <h2>Mes clients</h2>
        <p>Ils m’ont fait confiance pour leurs projets visuels.</p>

        <div className="clients-grid">

          {clients.map((client, index) => (
            <div className="client-card" key={index}>

              <img src={client.img} alt={client.name} />

              <h4>{client.name}</h4>

              <a href={client.twitter} className="twitter-btn">
                <FaTwitter />
              </a>

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