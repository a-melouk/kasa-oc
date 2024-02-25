import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/Header.scss";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={activeLink === "/" ? "active" : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
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
