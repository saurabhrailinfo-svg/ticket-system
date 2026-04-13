const express = require("express");
const app = express();

app.use(express.json());

// MUST: fast response for Railway
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// test route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const PORT = process.env.PORT || 3000;

// CRITICAL FIX
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
