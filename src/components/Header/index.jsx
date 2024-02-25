import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/Header.scss";

function Header() {
  function activateLink(e) {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <Link to="/" className="active" onClick={activateLink}>
          Accueil
        </Link>
        <Link to="/about" onClick={activateLink}>
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
