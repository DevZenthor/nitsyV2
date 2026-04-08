import "../styles/pages/Mentions.css";

function Mentions() {
  return (
    <section className="mentions">
      <div className="container">

        <h1>Mentions légales</h1>

        {/* ÉDITEUR */}
        <h3>Éditeur du site</h3>
        <p>
          Nom : Nitsy <br />
          Activité : Designer graphique (miniatures, affiches, logos) <br />
          Statut : Indépendant <br />
          Contact : via Discord
        </p>

        {/* DEV */}
        <h3>Développement</h3>
        <p>
          Site développé par <strong>Zenthor</strong> <br />
          Pour toute question technique : <br />
          <a
            href="https://x.com/zenthor1480"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://x.com/zenthor1480
          </a>
        </p>

        {/* HÉBERGEMENT */}
        <h3>Hébergement</h3>
        <p>
          Le site est hébergé par Vercel Inc. <br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA <br />
          Site : https://vercel.com
        </p>

        {/* PROPRIÉTÉ */}
        <h3>Propriété intellectuelle</h3>
        <p>
          L’ensemble des contenus présents sur ce site (images, créations,
          logos, designs) est la propriété exclusive de Nitsy, sauf mention
          contraire. Toute reproduction, distribution ou utilisation sans
          autorisation est strictement interdite.
        </p>

        {/* RESPONSABILITÉ */}
        <h3>Responsabilité</h3>
        <p>
          L’éditeur du site ne peut être tenu responsable des dommages directs
          ou indirects liés à l’utilisation du site.
        </p>

        {/* DONNÉES */}
        <h3>Données personnelles</h3>
        <p>
          Ce site ne collecte pas de données personnelles sans votre
          consentement. Les échanges se font via des plateformes externes
          (Discord, réseaux sociaux).
        </p>

      </div>
    </section>
  );
}

export default Mentions;