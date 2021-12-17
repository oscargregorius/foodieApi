module.exports = (app, db) => {
  app.get("/rest/menu", async (req, res) => {
    const query = "SELECT * FROM Menu";
    const list = await db.all(query);
    res.json(list);
  });

  app.post("/rest/addToMenu", async (req, res) => {
    const menuItem = req.body;
    const query = "INSERT INTO Menu VALUES(?,?,?)";

    try {
      const item = await db.all(query, [null, menuItem.title, menuItem.price]);
      res.json({ status: "sucess" });
      return;
    } catch (err) {
      res.json({ status: "error" });
    }
  });

  app.post("/rest/addOrder", async (req, res) => {
    const orderId = req.body;
    const query = "SELECT * FROM Menu WHERE id = ?";

    try {
      const order = await db.all(query, [orderId.id]);
      if (order.length <= 0) {
        res.json({ status: "not a valid menu item" });
        return;
      }
      await db.all("INSERT INTO Orders VALUES(?,?,?)", [
        null,
        orderId.id,
        "InProgress",
      ]);
      res.json({ status: "success" });
    } catch (error) {
      res.json({ status: "Error" });
    }
  });

  app.put("/rest/updateOrder", async (req, res) => {
    const status = req.body;
    const query = "UPDATE Orders SET status = ? WHERE id = ?";
    try {
      const order = await db.all("SELECT * FROM Orders WHERE id = ?", [status.id]);
      if (order.length <= 0) {
        res.json({ status: "order does not exists" });
        return;
      }
      await db.all(query, [status.status, status.id]);
      res.json({ status: "success" });
    } catch (error) {
      res.json({ status: error });
    }
  });
};
