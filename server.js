const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// Home
app.get("/", (req, res) => {
  res.send("OK");
});

// Test
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Save ticket
app.post("/save", (req, res) => {
  orders.push(req.body);
  res.json({ success: true, data: req.body });
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
