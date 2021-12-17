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
    const query = "SELECT * FROM Menu WHERE id = ?"

    try {
      const order = await db.all(query, [orderId.id])
      await db.all("INSERT INTO Orders VALUES(?,?)", [null, orderId.id]);
      res.json({ status: "success" });
    } catch (error) {
      res.json({status: "Error"})
    }
    
  })


};
