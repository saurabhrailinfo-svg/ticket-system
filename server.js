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

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Server running on port " + (process.env.PORT || 3000));
});
