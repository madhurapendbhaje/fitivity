import "./Home.scss";
import clock from "../../assets/icons/Clock.svg";

import { Link } from "react-router-dom";

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
        <Link to="/personal-challenge/categories/abs" className="link">
          <div className="challenges-container">
            <div className="challenges-container__text--difficulty">
              Advanced
            </div>
            <div className="challenges-container__text">AB Challenge</div>
            <div className="challenges-container__block">
              <img src={clock} />
              <div className="challenges-container__text--duration">7 Days</div>
            </div>
          </div>
        </Link>
      </section>

      <section className="suggested-challenges">
        <label className="challenges-container__label">Most Popular</label>
        <Link to="/personal-challenge/categories/yoga" className="link">
          <div className="challenges-container--popular">
            <div className="challenges-container__text--difficulty">
              Beginner
            </div>
            <div className="challenges-container__text">
              Mindfulness Challenge
            </div>
            <div className="challenges-container__block">
              <img src={clock} />
              <div className="challenges-container__text--duration">4 Days</div>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <div className="categories-container">
          <label className="categories-container__label">Categories</label>
          <div className="categories-container__box">
            <Link to="/personal-challenge/categories/abs" className="link">
              <div className="categories-container__block--1">
                <div className="categories-container__category">ABS</div>
                <div className="categories-container__category">15 days</div>
              </div>
            </Link>

            <Link to="/personal-challenge/categories/back" className="link">
              <div className="categories-container__block--2">
                <div className="categories-container__category">BACK</div>
                <div className="categories-container__category">30 days</div>
              </div>
            </Link>

            <Link to="/personal-challenge/categories/yoga" className="link">
              <div className="categories-container__block--3">
                <div className="categories-container__category">YOGA</div>
                <div className="categories-container__category">15 days</div>
              </div>
            </Link>

            <Link to="/personal-challenge/categories/legs" className="link">
              <div className="categories-container__block--4">
                <div className="categories-container__category">LEGS</div>
                <div className="categories-container__category">30 days</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
