import "./ChallengeCard.scss";

import Tag from "../Tag";

function ChallengeCard({ challengeData }) {
  const { image, title, difficulty, duration } = challengeData;
  return (
    <article className="challenge-card">
      <img src={image} alt="Trainer image" className="challenge-card__image" />
      <div className="challenge-card__container">
        <h2 className="challenge-card__title">{title}</h2>
        <p>{duration} days</p>
        <Tag tagText={difficulty} />
      </div>
    </article>
  );
}

export default ChallengeCard;
