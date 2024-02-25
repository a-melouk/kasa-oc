import Collapse from "../../components/Collapse";
import about from "../../assets/about.jpg";
import "../../styles/About.scss";

function About() {
  return (
    <div className="container">
      <div className="hero">
        <img src={about} alt="" />
      </div>
      <div className="valeurs">
        <Collapse
          title="Fiabilité"
          children={[
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
          ]}
          isOpen="false"
        />
        <Collapse
          title="Respect"
          children={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
          isOpen="false"
        />
        <Collapse
          title="Service"
          children={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
          isOpen="false"
        />
        <Collapse
          title="Sécurité"
          children={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes..",
          ]}
          isOpen="false"
        />
      </div>
    </div>
  );
}

export default About;
