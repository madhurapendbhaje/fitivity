import "./DayCard.scss";

function DayCard({ dayData }) {
  const { day, description, image } = dayData;
  return (
    <article className="day-card">
      <div className="day-card__image-container">
        <img className="day-card__image" src={image} alt="Training image" />
      </div>

      <div className="day-card__container">
        <h3 className="day-card__title">{day}</h3>
        <p className="day-card__description">{description.join(", ")}</p>
      </div>
      <img></img>
    </article>
  );
}

export default DayCard;
