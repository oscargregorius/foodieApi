const express = require("express");

const app = express();
const sqlite3 = require("sqlite3").verbose();

app.get("/", (req, res) => {
  res.json({ status: "connected" });
});

app.listen(4000, () => {
  console.log("Server started (http://localhost:4000/) !");
});
