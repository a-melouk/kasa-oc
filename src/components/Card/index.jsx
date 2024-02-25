import { Link } from "react-router-dom";
import "../../styles/Card.scss";

function Card({ logement }) {
  return (
    <div className="thumb">
      <Link to={`/logement/${logement.id}`}>
        <h2 className="thumb__title">{logement.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
