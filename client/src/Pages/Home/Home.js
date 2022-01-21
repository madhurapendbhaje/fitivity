import "./Home.scss";

function Home() {
  return (
    <>
      <header className="home-header">
        <nav className="home-header__container">
          <div className="home-header__item">Individual</div>
          <div className="home-header__item">Team</div>
        </nav>
      </header>

      <section className="suggested-challenges">
        <label className="challenges-container__label">Suggested for you</label>
        <div className="challenges-container">
          <div className="challenges-container__text--difficulty">Advanced</div>
          <div className="challenges-container__text">AB Challenge</div>
          <div className="challenges-container__block">
            <img />
            <div className="challenges-container__text">7 Days</div>
          </div>
        </div>
      </section>

      <section className="suggested-challenges">
        <label className="challenges-container__label">Most Popular</label>
        <div className="challenges-container--popular">
          <div className="challenges-container__text--difficulty">Beginner</div>
          <div className="challenges-container__text">
            Mindfullness Challenge
          </div>
          <div className="challenges-container__block">
            <img />
            <div className="challenges-container__text">4 Days</div>
          </div>
        </div>
      </section>

      <section>
        <div className="categories-container">
          <label className="categories-container__label">Categories</label>
          <div className="categories-container__box">
            <div className="categories-container__block--1">
              <div className="categories-container__category">ABS</div>
              <div className="categories-container__category">15 days</div>
            </div>

            <div className="categories-container__block--2">
              <div className="categories-container__category">BACK</div>
              <div className="categories-container__category">30 days</div>
            </div>

            <div className="categories-container__block--3">
              <div className="categories-container__category">YOGA</div>
              <div className="categories-container__category">15 days</div>
            </div>

            <div className="categories-container__block--4">
              <div className="categories-container__category">LEGS</div>
              <div className="categories-container__category">30 days</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
