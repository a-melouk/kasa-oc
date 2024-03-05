import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <div className="thumb">
        <img src={logement.cover} alt={logement.title} className="thumb__img" />
        <h2 className="thumb__title">{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Card;
