const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routers/routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

let connectionString =
  "mongodb+srv://ibrahima0818:oNRQgpD8idtzQeCu@cluster0.w9bbjbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(connectionString)
  .then(() => {
    const port = 8080;

    console.log("✅ Connected to DB");

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("❌ DB connection error:", error);
  });