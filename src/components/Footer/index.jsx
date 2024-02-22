import logo from "../../assets/logo-white.svg";
import "../../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo de Kasa" />
      <span>© 2020 Kasa. All rights reserved</span>
    </div>
  );
}

export default Footer;
