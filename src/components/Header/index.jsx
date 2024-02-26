import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

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
