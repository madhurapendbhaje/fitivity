import "./PersonalChalList.scss";
import back from "../../assets/icons/back.svg";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../util/Api";
import ChallengeCard from "../../components/ChallengeCard";

export default class PersonalChal extends Component {
  state = {
    challengesList: [],
    error: false,
  };

  componentDidMount() {
    const category = this.props.match.params.category;
    axios
      .get(`${API_URL}/categories/${category}`)
      .then((response) => {
        this.setState({ challengesList: response.data });
      })
      .catch((_err) => {
        this.setState({ error: true });
      });
  }
  render() {
    if (this.state.error) {
      return <div>Error loading, please try again later.</div>;
    }
    return (
      <div className="personal-challenge">
        <div className="personal-challenge__container">
          <Link to="/">
            <img className="personal-challenge__logo" src={back} />
          </Link>
          <h1 className="personal-challenge__title">
            {this.props.match.params.category} Challenges
          </h1>
        </div>
        {this.state.challengesList.map((challengeData) => {
          return (
            <Link
              key={challengeData.id}
              to={"/personal-challenge/" + challengeData.id}
              className="personal-challenge__link"
            >
              <ChallengeCard challengeData={challengeData} />
            </Link>
          );
        })}
      </div>
    );
  }
}
