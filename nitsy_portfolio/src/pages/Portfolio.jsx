import { useState, useRef, useEffect } from "react";
import "../styles/pages/Portfolio.css";

// IMAGES
import p1 from "../assets/logo1.jpg";

import p2 from "../assets/miniature1.png";
import p3 from "../assets/miniature5.png";
import p4 from "../assets/miniature7.png";
import p5 from "../assets/miniature8.png";
import p6 from "../assets/miniature10.png";
import p16 from "../assets/minia7.png";
import p17 from "../assets/minia8.png";
import p18 from "../assets/minia9.png";

import p8 from "../assets/poster6.png";
import p9 from "../assets/poster7.png";
import p10 from "../assets/poster9.jpeg";
import p11 from "../assets/poster8.jpeg";
import p12 from "../assets/Panda1.jpg";
import p13 from "../assets/Panda2.jpg";
import p14 from "../assets/Panda3.jpg";
import p15 from "../assets/Panda4.png";
import p19 from "../assets/1.png";
import p20 from "../assets/2.jpg";
import p21 from "../assets/3.jpg";
import p22 from "../assets/4.jpg";
import p23 from "../assets/5.png";
import p24 from "../assets/6.png";

function Portfolio() {
  const [mainFilter, setMainFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logos     = [{ img: p1, category: "logo", sub: null }];
  const miniatures = [
    { img: p2,  category: "miniature", sub: "gaming" },
    { img: p3,  category: "miniature", sub: "irl" },
    { img: p4,  category: "miniature", sub: "gaming" },
    { img: p5,  category: "miniature", sub: "irl" },
    { img: p6,  category: "miniature", sub: "gaming" },
    { img: p16, category: "miniature", sub: "gaming" },
    { img: p17, category: "miniature", sub: "gaming" },
    { img: p18, category: "miniature", sub: "gaming" },
  ];
  const posters = [
    { img: p8,  category: "poster", sub: "fortnite" },
    { img: p9,  category: "poster", sub: "fortnite" },
    { img: p10, category: "poster", sub: "fortnite" },
    { img: p11, category: "poster", sub: "fortnite" },
    { img: p12, category: "poster", sub: "fortnite" },
    { img: p13, category: "poster", sub: "fortnite" },
    { img: p14, category: "poster", sub: "fortnite" },
    { img: p15, category: "poster", sub: "fortnite" },
    { img: p19, category: "poster", sub: "irl" },
    { img: p20, category: "poster", sub: "fortnite" },
    { img: p21, category: "poster", sub: "fortnite" },
    { img: p22, category: "poster", sub: "fortnite" },
    { img: p23, category: "poster", sub: "fortnite" },
    { img: p24, category: "poster", sub: "creation" },
  ];

  const subCategories = {
    poster: [
      { key: "all", label: "Tous" },
      { key: "fortnite", label: "Fortnite" },
      { key: "rocket-league", label: "Rocket League" },
      { key: "valorant", label: "Valorant" },
      { key: "overwatch", label: "Overwatch" },
      { key: "irl", label: "IRL" },
      { key: "creation", label: "Création perso" },
    ],
    miniature: [
      { key: "all", label: "Toutes" },
      { key: "gaming", label: "Gaming" },
      { key: "irl", label: "IRL" },
    ],
  };

  const hasSubMenu = mainFilter === "poster" || mainFilter === "miniature";

  const handleMainFilter = (cat) => {
    setMainFilter(cat);
    setSubFilter("all");
    setMenuOpen(false);
  };

  const handleSubFilter = (sub) => {
    setSubFilter(sub);
    setMenuOpen(false);
  };

  // Filtrage pour les vues catégorie unique
  const filteredLogos = logos;
  const filteredMinis = subFilter === "all"
    ? miniatures
    : miniatures.filter(p => p.sub === subFilter);
  const filteredPosters = subFilter === "all"
    ? posters
    : posters.filter(p => p.sub === subFilter);

  const currentSubLabel = hasSubMenu
    ? subCategories[mainFilter].find(s => s.key === subFilter)?.label
    : null;

  // Helper : rendu d'une card
  const renderCard = (project, index) => (
    <div
      className={`portfolio-card ${project.category}`}
      key={index}
      onClick={() => setSelectedImage(project.img)}
    >
      <img src={project.img} alt={`project-${index}`} />
      <div className="overlay">
        <span>{project.sub || project.category}</span>
      </div>
    </div>
  );

  return (
    <section className="portfolio">
      <div className="container text-center">
        <h2>Mon portfolio</h2>
        <p>Découvrez mes créations graphiques.</p>

        {/* FILTRES */}
        <div className="filters">
          <button className={mainFilter === "all" ? "active" : ""} onClick={() => handleMainFilter("all")}>
            Tous
          </button>
          <button className={mainFilter === "logo" ? "active" : ""} onClick={() => handleMainFilter("logo")}>
            Logos
          </button>

          {/* POSTERS */}
          <div className="filter-with-sub" ref={mainFilter === "poster" ? menuRef : null}>
            <button
              className={mainFilter === "poster" ? "active" : ""}
              onClick={() => { handleMainFilter("poster"); setMenuOpen(prev => mainFilter === "poster" ? !prev : true); }}
            >
              Posters
              {mainFilter === "poster" && <span className="burger-icon"><span></span><span></span><span></span></span>}
            </button>
            {mainFilter === "poster" && menuOpen && (
              <div className="sub-dropdown">
                {subCategories.poster.map(s => (
                  <button key={s.key} className={subFilter === s.key ? "active" : ""} onClick={() => handleSubFilter(s.key)}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MINIATURES */}
          <div className="filter-with-sub" ref={mainFilter === "miniature" ? menuRef : null}>
            <button
              className={mainFilter === "miniature" ? "active" : ""}
              onClick={() => { handleMainFilter("miniature"); setMenuOpen(prev => mainFilter === "miniature" ? !prev : true); }}
            >
              Miniatures
              {mainFilter === "miniature" && <span className="burger-icon"><span></span><span></span><span></span></span>}
            </button>
            {mainFilter === "miniature" && menuOpen && (
              <div className="sub-dropdown">
                {subCategories.miniature.map(s => (
                  <button key={s.key} className={subFilter === s.key ? "active" : ""} onClick={() => handleSubFilter(s.key)}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Badge sous-filtre */}
        {hasSubMenu && subFilter !== "all" && (
          <div className="active-sub-label">
            <span>{currentSubLabel}</span>
            <button className="clear-sub" onClick={() => setSubFilter("all")}>✕</button>
          </div>
        )}

        {/* ── VUE TOUS : 3 blocs séparés ── */}
        {mainFilter === "all" && (
          <>
            <div className="category-block">
              <h3 className="category-title">Logos</h3>
              <div className="portfolio-grid grid-logo">
                {filteredLogos.map(renderCard)}
              </div>
            </div>

            <div className="category-block">
              <h3 className="category-title">Miniatures</h3>
              <div className="portfolio-grid grid-miniature">
                {miniatures.map(renderCard)}
              </div>
            </div>

            <div className="category-block">
              <h3 className="category-title">Posters</h3>
              <div className="portfolio-grid grid-poster">
                {posters.map(renderCard)}
              </div>
            </div>
          </>
        )}

        {/* ── VUE LOGOS ── */}
        {mainFilter === "logo" && (
          <div className="portfolio-grid grid-logo">
            {filteredLogos.map(renderCard)}
          </div>
        )}

        {/* ── VUE MINIATURES ── */}
        {mainFilter === "miniature" && (
          <div className="portfolio-grid grid-miniature">
            {filteredMinis.map(renderCard)}
          </div>
        )}

        {/* ── VUE POSTERS ── */}
        {mainFilter === "poster" && (
          <div className="portfolio-grid grid-poster">
            {filteredPosters.map(renderCard)}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="modal-img" />
        </div>
      )}

      <div className="portfolio-light-right"></div>
      <div className="portfolio-light-left"></div>
      <div className="portfolio-light"></div>
    </section>
  );
}

export default Portfolio;