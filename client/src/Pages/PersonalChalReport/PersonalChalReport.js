import React, { Component } from "react";
import "./PersonalChalReport.scss";
import axios from "axios";
import { API_URL } from "../../util/Api";
import ChallengeRing from "../../components/ChallengeRing/ChallengeRing";
import backArrow from "../../styles/assets/icons/back.svg";
import share from "../../styles/assets/icons/share.svg";
import { Link } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Day 1",
    SpO2: 4000,
    RESPIRATORY: 2400,
    RHR: 1500,
    amt: 2400
  },
  {
    name: "Day 2",
    SpO2: 3000,
    RESPIRATORY: 1398,
    RHR: 2500,
    amt: 2210
  },
  {
    name: "Day 3",
    SpO2: 2000,
    RESPIRATORY: 6800,
    RHR: 3100,
    amt: 2290
  },
  {
    name: "Day 4",
    SpO2: 2780,
    RESPIRATORY: 3908,
    RHR: 2600,
    amt: 2000
  },
  {
    name: "Day 5",
    SpO2: 1890,
    RESPIRATORY: 4800,
    RHR: 2900,
    amt: 2181
  },
  {
    name: "Day 6",
    SpO2: 2390,
    RESPIRATORY: 3800,
    RHR: 3200,
    amt: 2500
  },
  {
    name: "Day 7",
    SpO2: 3490,
    RESPIRATORY: 4300,
    RHR: 2800,
    amt: 2100
  }
];

export default class PersonalChalReport extends Component {
  // state = {
  //   selectedChallenge: {},
  //   error: false
  // };

  // componentDidMount() {
  //   const challengeId = this.props.match.params.challengeId;

  //   axios
  //     .get(`${API_URL}/challenges/${challengeId}`)
  //     .then((response) => {
  //       this.setState({ selectedChallenge: response.data });
  //     })
  //     .catch((_err) => {
  //       this.setState({ error: true });
  //     });
  // }

  render() {
    // if (this.state.error) {
    //   return (
    //     <div>Error loading the challenge details, please try again later.</div>
    //   );
    // }

    // const { title, description, duration } = this.state.selectedChallenge;

    return (
      <div className="challenge-report">
        <div className="icons-container">
          <Link to="/Day1">
            <img src={backArrow} className="back-icons" alt=""></img>
          </Link>
          <img src={share} className="back-icons" alt=""></img>
        </div>
        <div>
          <h3 className="challenge-info__title">Ab Challenge</h3>
        </div>
        <div className="challenge-ring-container">
          <ChallengeRing />
        </div>
        <div className="challenge-info">
          <h3 className="challenge-info__congrats">Congratulations</h3>
          <p className="challenge-info__description">
            The ab workout challenge is all about getting a rock-hard core and
            six-pack. Include movements like crunches, sit-ups, leg raises,
            mountain climbers, and burpees.
          </p>
        </div>
        <div className="lineChart-container">
          <LineChart
            width={350}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="SpO2" stroke="#e14328" />
            <Line type="monotone" dataKey="RHR" stroke="#5491d8" />
            <Line
              type="monotone"
              dataKey="RESPIRATORY"
              stroke="#6EE847"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
