import Card from "../../components/Card";
import "../../styles/Home.scss";
import slogan from "../../assets/slogan.png";
import Collapse from "../../components/Collapse";

function Home({ logements }) {
  const equipments = [
    "Wifi",
    "Cuisine",
    "Chauffage",
    "Fer à repasser",
    "Sèche-cheveux",
    "Espace de travail pour ordinateur portable",
    "Télévision",
    "Lave-linge",
    "Climatisation",
    "Sèche-linge",
  ];
  return (
    <div>
      <Collapse title="Equipements" children={equipments} isOpen="false" />
      <div className="container">
        <div className="hero">
          <img src={slogan} alt="Chez vous, partout et ailleurs" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
          {logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
