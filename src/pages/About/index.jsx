import about from "../../assets/about.jpg";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

function About() {
  return (
    <div className="about__container">
      <Banner image={about} alt="" />
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
