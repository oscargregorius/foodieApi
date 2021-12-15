const express = require("express");

const app = express();
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db_name = path.join("./foodie.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'foodie.db'");
});

app.get("/", (req, res) => {
  res.json({ status: "connected" });
});

app.listen(4000, () => {
  console.log("Server started (http://localhost:4000/) !");
});
