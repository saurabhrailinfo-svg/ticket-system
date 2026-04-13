const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection URL (अपना paste करो)
const MONGO_URL = "mongodb+srv://kumarskc2025_db_user:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(MONGO_URL);

let db;

// ✅ Connect MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db("ticketDB"); // database name
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Error ❌", err);
  }
}

connectDB();

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("OK");
});

// ✅ PING ROUTE
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// ✅ SAVE DATA (POST)
app.post("/save", async (req, res) => {
  try {
    const data = req.body;

    const result = await db.collection("orders").insertOne(data);

    res.json({
      success: true,
      insertedId: result.insertedId,
      data: data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// ✅ GET ALL ORDERS
app.get("/orders", async (req, res) => {
  try {
    const orders = await db.collection("orders").find().toArray();

    res.json(orders);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ PORT (Railway auto)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
