const express = require("express");

const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");
const util = require("util");
const crypto = require("crypto");
var session = require("express-session");

//app.use(bodyParser.urlencoded({ extended: false }));
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
const salt = "harrypotter2021".toString("hex");

const getHash = (password) => {
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString("hex");
  return hash;
};

app.get("/", (req, res) => {
  res.json({ status: "connected" });
});

app.get("/users", async (req, res) => {
  const query = "SELECT * FROM Users";
  const data = await db.all(query);
  res.json(data);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const encryptedPassword = getHash(user.password);
  const role = "USER";
  const result = await db.all("INSERT INTO Users VALUES(?,?,?,?)", [
    null,
    user.username,
    encryptedPassword,
    role,
  ]);
  res.json({ status: "success" });
});

app.post("/rest/login", async (req, res) => {
  const userToLogin = req.body;
  let encryptedPassword = getHash(userToLogin.password);
  let user = await db.all(
    "SELECT * FROM Users WHERE username = ? AND password = ?",
    [userToLogin.username, encryptedPassword]
  );
  if (user[0]) {
    req.session.user = user[0];
  }
  res.json(user[0]);
});

app.get("/rest/whoAmI", async (req, res) => {
  if (req.session?.user) {
    const query =
      ("SELECT * FROM Users WHERE username = ?", [req.session?.user.username]);
    const user = await db.all(query);
    res.json(user);
  } else {
    res.json({ error: "bad credentials" });
  }
});

app.listen(4000, () => {
  console.log("Server started port: 4000");
});
