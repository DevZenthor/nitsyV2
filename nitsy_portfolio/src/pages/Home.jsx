import "../styles/pages/Home.css";
import nitsyImg from "../assets/Nitsy.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* TEXTE */}
          <div className="col-lg-6 hero-text">

            <span className="tag">Graphiste</span>

            <h1>
              Nitsy <br />
              <span>Designer créatif</span>
            </h1>

            <p>
              CEO de <strong>One Prodige</strong> et designer graphique, je réalise
              des miniatures, affiches, logos et bien d’autres créations visuelles
              pour donner vie à vos projets.
            </p>

            <div className="hero-buttons">
              <button className="btn-main">Voir mon portfolio</button>
              <button className="btn-outline">Me contacter</button>
            </div>

          </div>

          {/* IMAGE */}
          <div className="col-lg-6 text-center">
            <div className="image-wrapper">
              <img src={nitsyImg} alt="Nitsy" />
            </div>
          </div>

        </div>
      </div>

      {/* LUMIÈRE BAS GAUCHE */}
      <div className="hero-light"></div>

    </section>
  );
}

export default Home;