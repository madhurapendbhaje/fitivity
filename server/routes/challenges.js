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
router.get("category/:category", (req, res) => {
  // Read challenges data from file
  const challengesData = readChallenges();

  // Filter data based on categories
  const filteredData = challengesData.filter((challenge) => {
    challenge.category === req.params.category;
  });

  // Strip down filtered data to necessary fields
  const strippedData = filteredData.map((challenge) => {
    const newChallenge = {};

    newChallenge.id = challenge.id;
    newChallenge.title = challenge.title;
    newChallenge.difficulty = challenge.difficulty;
    newChallenge.image = challenge.image;
    newChallenge.duration = challenge.duration;
    newChallenge.category = challenge.category;

    return newChallenge;
  });

  res.send(strippedData);
});

// GET endpoint for an individual challenge
router.get("/:id", (req, res) => {
  // Read challenges data from file
  const challengesData = readChallenges();

  // Find individual challenge from provided challenge id in url
  const selectedChallenge = challengesData.find(
    (challenge) => challenge.id === req.params.id
  );

  if (!selectedChallenge) {
    return res.status(404).send("Requested challenge not found");
  }

  // Respond with the selected challenge
  res.json(selectedChallenge);
});

module.exports = router;
