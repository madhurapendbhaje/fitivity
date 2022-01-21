import "./DayCard.scss";

function DayCard({ dayData }) {
  const { day, description } = dayData;
  return (
    <article className="day-card">
      <img></img>
      <div>
        <h3 className="day-card__title">{day}</h3>
        <p className="day-card__description">{description.join(", ")}</p>
      </div>
      <img></img>
    </article>
  );
}

export default DayCard;
