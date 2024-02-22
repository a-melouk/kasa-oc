import "../../styles/Card.scss";

function Card({ title }) {
  return (
    <div className="thumb">
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
}

export default Card;
