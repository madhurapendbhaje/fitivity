const express = require("express");
const app = express();
const cors = require("cors");
const challengesRoutes = require("./routes/challenges");

require("dotenv").config();
const port = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

// Allows to serve static files from folder
app.use(express.static("public/images"));

app.use("/challenges", challengesRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
