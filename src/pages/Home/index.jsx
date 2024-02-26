import "../../sass/pages/_home.scss";
import Card from "../../components/Card";
import slogan from "../../assets/slogan.png";

function Home({ logements }) {
  return (
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
  );
}

export default Home;
