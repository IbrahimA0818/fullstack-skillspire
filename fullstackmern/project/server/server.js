const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Import your routes
const router = require("./routers/routes");

app.use(cors());
app.use(bodyParser.json());

// API routes go first
app.use("/api", router);

// Serve React build folder
const clientBuildPath = path.join(__dirname, "../client/build");
app.use(express.static(clientBuildPath));

// Catch-all to serve React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// DB connection
const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    const port = process.env.PORT || 8080;
    console.log("✅ Connected to DB");
    app.listen(port, () => console.log(`✅ Server running on port ${port}`));
  })
  .catch((error) => console.log("❌ DB connection error:", error));