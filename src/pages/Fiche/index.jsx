import { useParams } from "react-router-dom";

function Fiche() {
  let { idLogement } = useParams();
  const logements = JSON.parse(localStorage.getItem("logements"));
  const logement = logements.find((logement) => logement.id === idLogement);

  return (
    <div>
      <h1>Logements</h1>
      <h2>Logement {logement.title}</h2>
    </div>
  );
}

export default Fiche;
