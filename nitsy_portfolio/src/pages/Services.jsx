import "../styles/pages/Services.css";
import { FaImage, FaPaintBrush, FaPenNib } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaImage />,
      title: "Miniatures",
      price: "10€",
      desc: "Miniatures YouTube percutantes et optimisées pour attirer l’attention et maximiser vos clics.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Posters",
      price: "15€",
      desc: "Affiches modernes et visuellement impactantes pour vos projets, événements ou marques.",
    },
    {
      icon: <FaPenNib />,
      title: "Logos",
      price: "20€",
      desc: "Logos uniques et professionnels pour créer une identité forte et mémorable.",
    },
  ];

  return (
    <section className="services">
      <div className="container text-center">

        <h2>Mes services</h2>
        <p>Des créations graphiques sur mesure pour booster votre image.</p>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p className="price">{service.price}</p>

              <p className="desc">{service.desc}</p>

              <a
                href="https://discord.gg/TON-LIEN"
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn"
              >
                Commander
              </a>

            </div>
          ))}

        </div>

      </div>

      {/* lumières */}
      <div className="services-light"></div>
    </section>
  );
}

export default Services;