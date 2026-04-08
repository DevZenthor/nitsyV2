import { useState } from "react";
import "../styles/pages/Portfolio.css";

// IMAGES
import p1 from "../assets/logo1.jpg";

import p2 from "../assets/miniature1.png";
import p3 from "../assets/miniature5.png";
import p4 from "../assets/miniature7.png";
import p5 from "../assets/miniature8.png";
import p6 from "../assets/miniature10.png";

import p8 from "../assets/poster6.png";
import p9 from "../assets/poster7.png";
import p10 from "../assets/poster9.jpeg";
import p11 from "../assets/poster8.jpeg";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { img: p1, category: "logo" },

    { img: p2, category: "miniature" },
    { img: p3, category: "miniature" },
    { img: p4, category: "miniature" },
    { img: p5, category: "miniature" },
    { img: p6, category: "miniature" },

    { img: p8, category: "poster" },
    { img: p9, category: "poster" },
    { img: p10, category: "poster" },
    { img: p11, category: "poster" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="portfolio">
      <div className="container text-center">

        <h2>Mon portfolio</h2>
        <p>Découvrez mes créations graphiques.</p>

        {/* FILTRES */}
        <div className="filters">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
            Tous
          </button>

          <button className={filter === "logo" ? "active" : ""} onClick={() => setFilter("logo")}>
            Logos
          </button>

          <button className={filter === "poster" ? "active" : ""} onClick={() => setFilter("poster")}>
            Posters
          </button>

          <button className={filter === "miniature" ? "active" : ""} onClick={() => setFilter("miniature")}>
            Miniatures
          </button>
        </div>

        {/* GRID */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              className={`portfolio-card ${project.category}`}
              key={index}
              onClick={() => setSelectedImage(project.img)}
            >
              <img src={project.img} alt={`project-${index}`} />

              <div className="overlay">
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="modal-img" />
        </div>
      )}

      {/* LUMIÈRES */}
      <div className="portfolio-light-right"></div>
      <div className="portfolio-light-left"></div>
      <div className="portfolio-light"></div>
    </section>
  );
}

export default Portfolio;