import Card from "../../components/Card";
import slogan from "../../assets/slogan.png";
import Banner from "../../components/Banner";

function Home({ logements }) {
  return (
    <div className="home__container">
      <Banner
        image={slogan}
        alt="Chez vous, partout et ailleurs"
        slogan="Chez vous, partout et ailleurs"
      />
      <div className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
