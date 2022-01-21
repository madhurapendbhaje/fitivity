import "./DayCard.scss";

function DayCard({ dayData, image }) {
  const { day, description } = dayData;
  return (
    <article className="day-card">
      <img className="day-card__image" src={image}></img>
      <div className="day-card__container">
        <h3 className="day-card__title">{day}</h3>
        <p className="day-card__description">{description.join(", ")}</p>
      </div>
      <img></img>
    </article>
  );
}

export default DayCard;
