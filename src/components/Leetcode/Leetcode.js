import React, { useEffect, useState } from 'react'
import { Container, Top, Dashboard, Right, Left, Title, Chart, Row } from './LeetcodeStyles'
import axios from 'axios';
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressBar from "@ramonak/react-progress-bar";

const Leetcode = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://leetcode-stats-api.herokuapp.com/lukutuks"
      )
      .then(data => {
        setProfile(data.data)
        console.log(data)
      });
  }, []);


  return (
    <Container>
      <Dashboard>
        <Top>
          <Title>LeetCode Progress Dashboard</Title>
        </Top>
        <Left>
          <Chart>
            <CircularProgressbarWithChildren strokeWidth={8} value={(profile.totalSolved / profile.totalQuestions) * 100}
              styles={buildStyles({
                pathColor: "#0f43ad",
                trailColor: "#090909",
                pathTransitionDuration: 1.2
              })}
            >
              <br />
              <div style={{ fontSize: 19 }}>{profile.totalSolved}</div>
              <div style={{ fontSize: 10, marginTop: -8 }}>
                <br />
                Solved
              </div>
            </CircularProgressbarWithChildren>
          </Chart>
        </Left>
        <Right>
          <Row>
            <h5>Easy: {profile.easySolved}/{profile.totalEasy}</h5>
            <div class="barWrapper">
              <div class="bar bar-moved bar-green">
                <div class="bar2 green" style={{ width: ((profile.easySolved / profile.totalEasy) * 188) }}>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h5>Medium: {profile.mediumSolved}/{profile.totalMedium}</h5>
            <div class="barWrapper">
              <div class="bar bar-moved bar-yellow">
                <div class="bar2 yellow" style={{ width: ((profile.mediumSolved / profile.totalMedium) * 188) }} >
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h5>Hard: {profile.hardSolved}/{profile.totalHard}</h5>
            <div class="barWrapper">
              <div class="bar bar-moved bar-red">
                <div class="bar2 red" style={{ width: ((profile.hardSolved / profile.totalHard) * 188) }}>
                </div>
              </div>
            </div>
          </Row>
        </Right>
      </Dashboard>
    </Container>
  )
}

export default Leetcode

