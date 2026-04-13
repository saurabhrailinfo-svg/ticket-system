process.on("uncaughtException", (err) => {
  console.log("ERROR:", err);
});
const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

app.post("/save", (req, res) => {
  orders.push(req.body);
  res.send("Saved ✅");
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
