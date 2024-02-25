import { Link } from "react-router-dom";
import "../../styles/Card.scss";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <div className="thumb">
        <h2 className="thumb__title">{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Card;
