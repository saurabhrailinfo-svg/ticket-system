const express = require("express");
const app = express();

app.use(express.json());

// Health route (Railway के लिए MUST)
app.get("/", (req, res) => {
  res.send("OK");
});

// Test route
app.get("/test", (req, res) => {
  res.json({ status: "working" });
});

// Error handling (IMPORTANT)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 3000;

// IMPORTANT: 0.0.0.0 binding
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
