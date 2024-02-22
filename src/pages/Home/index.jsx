import Card from "../../components/Card";
import "../../styles/Home.scss";
import slogan from "../../assets/slogan.png";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <img src={slogan} alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <Card title="Magnifique appartement proche Canal Saint Martin" />
        <Card title="Magnifique appartement proche Canal Saint Martin" />
        <Card title="Magnifique appartement proche Canal Saint Martin" />
        <Card title="Magnifique appartement proche Canal Saint Martin" />
        <Card title="Magnifique appartement proche Canal Saint Martin" />
        <Card title="Magnifique appartement proche Canal Saint Martin" />
      </div>
    </div>
  );
}

export default Home;
