import "./DayCard.scss";
import arrow from "../../assets/icons/arrow.svg";

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
      <img src={arrow} alt="arrow icon" className="day-card__arrow" />
    </article>
  );
}

export default DayCard;
