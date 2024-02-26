import "../../sass/pages/_error.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  // Check if the current route is the root page ("/")
  const isRootPage = location.pathname === "/";

  // Conditionally apply the class to the root element
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isRootPage) {
      rootElement.classList.add("no-gap");
    } else {
      rootElement.classList.remove("no-gap");
    }

    // Clean up the class when the component unmounts
    return () => {
      rootElement.classList.remove("no-gap");
    };
  }, [isRootPage]);
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
