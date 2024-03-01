import { useState } from "react";
import arrow from "../../assets/arrow_down.svg";

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  function changePicture(e) {
    switch (e.target.alt) {
      case "Previous": {
        if (currentPicture === 0) setCurrentPicture(pictures.length - 1);
        else setCurrentPicture(currentPicture - 1);
        break;
      }
      case "Next": {
        if (currentPicture === pictures.length - 1) setCurrentPicture(0);
        else setCurrentPicture(currentPicture + 1);
        break;
      }
      default:
        break;
    }
  }

  const hasMoreThanOnePicture = pictures.length > 1;
  if (!hasMoreThanOnePicture)
    return (
      <div className="carrousel">
        <img src={pictures[0]} alt="" />
      </div>
    );
  else {
    return (
      <div className="carrousel">
        <div className="carrousel__controls">
          <button
            className="carrousel__controls--previous"
            onClick={changePicture}
          >
            <img src={arrow} alt="Previous" />
          </button>

          <button className="carrousel__controls--next" onClick={changePicture}>
            <img src={arrow} alt="Next" />
          </button>
        </div>
        <span className="carrousel__controls__current">
          {currentPicture + 1} / {pictures.length}
        </span>
        <img
          className="carrousel__current__picture"
          src={pictures[currentPicture]}
          alt=""
        />
      </div>
    );
  }
}

export default Carrousel;
