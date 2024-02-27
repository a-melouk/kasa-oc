import starEmpty from "../../assets/star-empty.svg";
import starFull from "../../assets/star-full.svg";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <img className="star" key={i} src={starFull} alt="Star filled" />
      );
    } else {
      stars.push(
        <img className="star" key={i} src={starEmpty} alt="Star empty" />
      );
    }
  }

  return <div className="logement__rating">{stars}</div>;
}

export default StarRating;
