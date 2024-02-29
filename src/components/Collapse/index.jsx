import { useState } from "react";
import arrow from "../../assets/arrow_down.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`dropdown ${isOpen ? "opened" : "closed"}`}>
      <div className="dropdown__heading" onClick={onClick}>
        <button className="dropdown__heading__title">{title}</button>
        <button className="dropdown__heading__icon">
          <img
            src={arrow}
            alt=""
            className={`${isOpen ? "opened" : "closed"}`}
          />
        </button>
      </div>
      <div className={`dropdown__content ${isOpen ? "opened" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;

// <Collapse title="Equipements" children={equipments} isOpen="false" />
