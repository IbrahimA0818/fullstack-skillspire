const path = require("path"); // <- add this
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routers/routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api", router); // optional: prefix API routes with /api

// Serve React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Connect to MongoDB
const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    const port = process.env.PORT || 8080; // Use Render's PORT environment variable

    console.log("✅ Connected to DB");

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("❌ DB connection error:", error);
  });