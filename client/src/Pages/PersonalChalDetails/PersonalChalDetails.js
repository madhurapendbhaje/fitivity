import React, { Component } from "react";
import "./PersonalChalDetails.scss";
import videoPoster from "../../styles/assets/image/video-placeholder.jpeg";

export default class PersonalChalDetails extends Component {
  render() {
    return (
      <div>
        <video loop autoPlay className="challenge-video" poster={videoPoster}>
          {/* <source src="" type="video/mp4" /> */}
        </video>
        <div className="challenge-header">
          <div className="challenge-header__image" alt="header"></div>
          <h3 className="challenge-header__title">Challenge Name</h3>
          <p className="challenge-header__level">Beginner</p>
        </div>
        <div className="challenge-details">
          <div className="challenge-details__about">
            <h3 className="challenge-details__about-title">About</h3>
            <p className="challenge-details__about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="challenge-focus">
            <h3>Areas of Focus</h3>
            <div></div>
            <p>Strain</p>
            <div></div>
            <p>Recovery</p>
            <div></div>
            <p>Sleep</p>
          </div>
          <div className="challenge-tasks">
            <h3>7-Day Challenge</h3>
            <article>
              <img></img>
              <div>
                <h3>Day 1</h3>
                <p>Brief description</p>
              </div>
              <img></img>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
