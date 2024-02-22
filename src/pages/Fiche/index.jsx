import { Link, useParams } from "react-router-dom";

function Fiche() {
  let { numeroLogement } = useParams();

  return (
    <div>
      <h1>Logements</h1>
      <h2>Logement {numeroLogement}</h2>

      {parseInt(numeroLogement) === 1 ? (
        <Link to={`/logement/1`}>Précédent</Link>
      ) : (
        <Link to={`/logement/${parseInt(numeroLogement) - 1}`}>Précédent</Link>
      )}

      <Link to={`/logement/${parseInt(numeroLogement) + 1}`}>Suivant</Link>
    </div>
  );
}

export default Fiche;
