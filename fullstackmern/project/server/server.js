const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const router = require("./routers/routes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api", router); // all your donations routes are now prefixed with /api

// Serve React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all to serve React's index.html for client-side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// MongoDB connection
const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    const port = process.env.PORT || 8080; // Render will set PORT automatically

    console.log("✅ Connected to DB");
    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB connection error:", error);
  });