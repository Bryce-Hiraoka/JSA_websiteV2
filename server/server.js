const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());  // Enable CORS for all routes

app.get("/api", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
