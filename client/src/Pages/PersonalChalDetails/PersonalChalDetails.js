import React, { Component } from "react";
import "./PersonalChalDetails.scss";
import videoPoster from "../../assets/video-placeholder.jpeg";

export default class PersonalChalDetails extends Component {
  render() {
    return (
      <div>
        <video loop autoPlay className="challenge-video" poster={videoPoster}>
          <source src="" type="video/mp4" />
        </video>
        <div>
          <img></img>
          <h3>Challenge Name</h3>
          <p>Beginner</p>
        </div>
        <div className="challenge-details">
          <div className="challenge-details__about">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
          <div className="challenge-">
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
