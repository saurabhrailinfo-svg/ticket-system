const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// Health check (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// Save order
app.post("/save", (req, res) => {
  orders.push(req.body);
  res.json({ message: "Saved", data: req.body });
});

// Get orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
