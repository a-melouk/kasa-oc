import { NavLink } from "react-router-dom";

function Error() {
  const root = document.getElementById("root");
  root.classList.add("no-gap");
  return (
    <div className="error">
      <h1 className="error__heading">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">Retour sur la page d'accueil</NavLink>
    </div>
  );
}

export default Error;
