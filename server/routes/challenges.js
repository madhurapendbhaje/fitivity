const express = require("express");
const router = express.Router();
const fs = require("fs");

/**
 * Function to read from data file
 * src: https://www.glofox.com/blog/fitness-challenges/
 */
function readChallenges() {
  const data = fs.readFileSync("./data/challenges.json");
  const parsedData = JSON.parse(data);
  return parsedData;
}

// Routes

// GET endpoint for list of all challenges
router.get("/", (_req, res) => {
  // Read challenges data from file
  const challengesData = readChallenges();

  // Strip down challenges data to necessary fields
  const strippedData = challengesData.map((challenge) => {
    const newChallenge = {};

    newChallenge.id = challenge.id;
    newChallenge.title = challenge.title;
    newChallenge.difficulty = challenge.difficulty;
    newChallenge.image = challenge.image;
    newChallenge.duration = challenge.duration;

    return newChallenge;
  });

  res.send(strippedData);
});

module.exports = router;
