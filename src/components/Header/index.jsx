import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
