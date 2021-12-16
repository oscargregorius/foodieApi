const crypto = require("crypto");
module.exports = (app, db) => {
  const salt = "harrypotter2021".toString("hex");

  const getHash = (password) => {
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
      .toString("hex");
    return hash;
  };

  app.get("/users", async (req, res) => {
    const query = "SELECT id,username,role FROM Users";
    const data = await db.all(query);
    res.json(data);
  });

  app.post("/user", async (req, res) => {
    const user = req.body;
    const query = "SELECT username FROM Users WHERE username = ?";
    const userExists = await db.all(query, [user.username]);
    console.log("???? ", userExists);
    if (userExists.length === 0) {
      const encryptedPassword = getHash(user.password);
      const role = "USER";
      const result = await db.all("INSERT INTO Users VALUES(?,?,?,?)", [
        null,
        user.username,
        encryptedPassword,
        role,
      ]);
      res.json({ status: "success" });
      return;
    }
    res.json({ status: "user already exists" });
  });

  app.post("/rest/login", async (req, res) => {
    const userToLogin = req.body;
    let encryptedPassword = getHash(userToLogin.password);
    let user = await db.all(
      "SELECT id,username,role FROM Users WHERE username = ? AND password = ?",
      [userToLogin.username, encryptedPassword]
    );
    if (user[0]) {
      req.session.user = user[0];
    }
    res.json(user[0]);
  });

  app.delete("/rest/logout", async (req, res) => {
    if (req.session.user) {
      req.session.user = null;
      console.log("papppiii ", req.session);
      res.json({ status: "Successfully logged out" });
      return;
    }
    res.json({ status: "No user in session" });
  });

  app.get("/rest/whoAmI", async (req, res) => {
    if (req.session?.user && user !== null) {
      const user = await db.all(
        "SELECT id,username,role FROM Users WHERE username = ?",
        [req.session?.user.username]
      );
      res.json(user);
    } else {
      res.json({ error: "bad credentials" });
    }
  });

  app.put("/rest/promoteUser", async (req, res) => {
    const admin = req.session?.user;
    const userToPromote = req.body;

    if (admin && admin.role === "ADMIN") {
      const query = "UPDATE Users SET role = ? WHERE username = ?";
      const promotedUser = await db.all(query, [
        "ADMIN",
        userToPromote.username,
      ]);
      res.json({ status: "The user has been promoted successfully!" });
      return;
    }
    res.json({ status: "You dont have the rights to promote another user" });
  });
};
