const express = require("express");

const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");
const util = require("util");
var session = require("express-session");
const userModule = require("./Users");
const acl = require("./acl");

app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    resave: false,
  }),
  bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());
const db_name = path.join("./foodie.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'foodie.db'");
});

db.all = util.promisify(db.all);
db.run = util.promisify(db.run);

app.use(acl);
userModule(app, db);

app.get("/", (req, res) => {
  res.json({ status: "connected" });
});

app.listen(4000, () => {
  console.log("Server started port: 4000");
});
