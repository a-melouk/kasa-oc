import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse";
import StarRating from "../../components/StarRating";

function Fiche() {
  let { idLogement } = useParams();
  const navigate = useNavigate();
  const logements = JSON.parse(localStorage.getItem("logements"));
  const logement = logements.find((logement) => logement.id === idLogement);

  return logement ? (
    <div className="logement">
      <div className="logement__carrousel">
        <img src={logement.pictures[0]} alt={logement.title} />
      </div>
      <section className="logement__presentation">
        <div className="logement__title__location">
          <h1 className="logement__title">{logement.title}</h1>
          <h2 className="logement__location">{logement.location}</h2>
        </div>
        <div className="logement__host">
          <h3 className="logement__host__name">{logement.host.name}</h3>
          <img
            className="logement__host__picture"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
        <div className="logement__tags">
          {logement.tags.map((tag) => (
            <span key={tag} className="logement__tag">
              {tag}
            </span>
          ))}
        </div>
        <StarRating rating={logement.rating} />
      </section>

      <section className="logement__details">
        <Collapse
          className="logement__details__description"
          title="Description"
        >
          <p>{logement.description}</p>
        </Collapse>

        <Collapse
          className="logement__details__equipements"
          title="Équipements"
        >
          {logement.equipments.map((equipment) => (
            <span key={equipment} className="logement__details__equipement">
              {equipment}
            </span>
          ))}
        </Collapse>
      </section>
    </div>
  ) : (
    navigate("/error")
  );
}

export default Fiche;
