import Card from "../../components/Card";
import "../../styles/Home.scss";
import slogan from "../../assets/slogan.png";
import Collapse from "../../components/Collapse";

function Home({ logements }) {
  return (
    <div>
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
