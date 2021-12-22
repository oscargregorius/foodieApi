module.exports = (app, db) => {
  // food
  app.get("/rest/food", async (req, res) => {
    const query = "SELECT * FROM Food";
    const list = await db.all(query);
    res.json(list);
  });

  // drinks
  app.get("/rest/drink", async (req, res) => {
    const query = "SELECT * FROM Drink";
    const list = await db.all(query);
    res.json(list);
  });
  // sides
  app.get("/rest/sides", async (req, res) => {
    const query = "SELECT * FROM Sides";
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
    const menu = req.body;
    const foodId = menu.foodId;
    const drinkId = menu.drinkId;
    const sideId = menu.sideId;
    const total = menu.total;
    let order;

    const query = "INSERT INTO Order VALUES(?,?,?,?,?,?)";
    try {
      order = await db.all(query, [
        null,
        foodId,
        drinkId,
        sideId,
        total,
        "On going",
      ]);
    } catch (error) {
      res.json(error);
    }
    if (order.length <= 0) {
      res.json({ status: "Something went wrong" });
      return;
    }
    res.json(order);
  });

  app.put("/rest/updateOrder", async (req, res) => {
    const status = req.body;
    const query = "UPDATE Orders SET status = ? WHERE id = ?";
    try {
      const order = await db.all("SELECT * FROM Orders WHERE id = ?", [
        status.id,
      ]);
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
