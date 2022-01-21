import "./PersonalChalDetails.scss";

import React, { Component } from "react";
import axios from "axios";

import { API_URL } from "../../util/Api";
import Tag from "../../components/Tag";
import DayCard from "../../components/DayCard";
import { Link } from "react-router-dom";

export default class PersonalChalDetails extends Component {
  state = {
    selectedChallenge: {},
    error: false
  };

  componentDidMount() {
    const challengeId = this.props.match.params.challengeId;

    axios
      .get(`${API_URL}/challenges/${challengeId}`)
      .then((response) => {
        this.setState({ selectedChallenge: response.data });
      })
      .catch((_err) => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div>Error loading the challenge details, please try again later.</div>
      );
    }
    const { id, title, difficulty, duration, image, description, challenges } =
      this.state.selectedChallenge;
    return (
      <div className="challenge-container">
        <video loop autoPlay className="challenge-video" poster={image}>
          {/* <source src="" type="video/mp4" /> */}
        </video>
        <div className="challenge-header">
          <div className="challenge-header__image" alt="header"></div>
          <h3 className="challenge-header__title">{title}</h3>
          <div className="challenge-header__level">
            <Tag tagText={difficulty} />
          </div>
        </div>
        <div className="challenge-details">
          <div className="challenge-details__about">
            <h3 className="challenge-details__about-title">About</h3>
            <p className="challenge-details__about-text">{description}</p>
          </div>
          <div className="challenge-details__focus">
            <h3 className="challenge-details__focus-title">Areas of Focus</h3>
            <div className="challenge-details__focus-container">
              <div>
                <p>Strain</p>
              </div>
              <div>
                <p>Recovery</p>
              </div>
              <div>
                <p>Sleep</p>
              </div>
            </div>
          </div>
          <div className="challenge-tasks">
            <h3>{duration}-Day Challenge</h3>
            {challenges?.map((dayData) => {
              return (
                <Link
                  key={dayData.id}
                  to={`/personal-challenge/${id}/${dayData.id}`}
                >
                  <DayCard dayData={dayData} image={image} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
