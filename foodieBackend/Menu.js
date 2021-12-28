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

  // app.post("/rest/addToCart", async (req, res) => {
  //   const menu = req.body;
  //   const foodId = menu.foodId;
  //   const drinkId = menu.drinkId;
  //   const sideId = menu.sideId;
  //   const total = menu.total;
  //   let order;

  //   const query = "INSERT INTO Order VALUES(?,?,?,?,?,?)";
  //   try {
  //     order = await db.all(query, [
  //       null,
  //       foodId,
  //       drinkId,
  //       sideId,
  //       total,
  //       "On going",
  //     ]);
  //   } catch (error) {
  //     res.json(error);
  //   }
  //   if (order.length <= 0) {
  //     res.json({ status: "Something went wrong" });
  //     return;
  //   }
  //   res.json(order);
  // });

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

  app.post("/rest/addCart", async (req, res) => {
    const { userId } = req.body;
    const isCart = "SELECT * FROM Cart Where userId = ?";
    const createCart = "INSERT INTO Cart VALUES(?,?)";
    const createCartItems = "INSERT INTO CartItems VALUES(?,?,?,?,?)";
    const getCart = "SELECT * FROM Cart WHERE userId = ?";
    const cart = await db.all(isCart, [userId]);
    if (cart?.length <= 0) {
      await db.all(createCart, [null, userId]);
      const collectedCart = await db.all(getCart, [userId]);
      await db.all(createCartItems, [
        null,
        null,
        null,
        null,
        collectedCart[0].id,
      ]);
      res.json({ status: "success" });
      return;
    }
    res.json({ status: "Cart already exists" });
    return;
  });

  app.put("/rest/updateCart", async (req, res) => {
    const { userId, category, categoryId } = req.body;
    const getCart = "SELECT * FROM Cart WHERE userId = ?";
    const getItem = `SELECT * FROM CartItems WHERE cartId = ? AND ${category} = ${categoryId} AND ${category} IS NOT NULL LIMIT 1`;
    const updateItems = `UPDATE CartItems SET ${category} = ? WHERE id = ?`;
    const deleteEmptyRows =
      "DELETE FROM CartItems WHERE foodId IS NULL AND drinkId IS NULL AND sidesId IS NULL";

    await db.all(deleteEmptyRows);

    const cart = await db.all(getCart, [userId]);
    if (cart.length > 0) {
      const item = await db.all(getItem, cart[0].id);
      await db.all(updateItems, [null, item[0].id]);
      res.json({ status: "success" });
      return;
    }
    res.json({ status: "Something went wrong" });
    return;
  });

  app.get("/rest/getCart/:id", async (req, res) => {
    const userId = req.param("id");
    const query = "SELECT * FROM Cart WHERE userId = ?";

    try {
      const cart = await db.all(query, [userId]);
      if (cart.length > 0) {
        res.json(cart[0]);
        return;
      }
    } catch (error) {
      res.json({ error: "something went wrong" });
      return;
    }
    res.json({ error: "something went wrong" });
  });

  app.post("/rest/addToCart", async (req, res) => {
    const cart = req.body;
    const addNewItems = "INSERT INTO CartItems VALUES(?,?,?,?,?)";
    try {
      await db.all(addNewItems, [
        null,
        cart.foodId,
        cart.drinkId,
        cart.sidesId,
        cart.cartId,
      ]);
      res.json({ status: "success" });
    } catch (error) {
      res.json({ error: error });
    }
  });

  app.get("/rest/getCartItems/:id", async (req, res) => {
    const userId = req.param("id");
    const getCart = "SELECT * FROM Cart WHERE userId = ?";
    const getCartItems = "SELECT * FROM CartItems WHERE cartId = ?";
    const deleteEmptyRows =
      "DELETE FROM CartItems WHERE foodId IS NULL AND drinkId IS NULL AND sidesId IS NULL";

    await db.all(deleteEmptyRows);
    const cart = await db.all(getCart, [userId]);
    if (cart.length > 0) {
      const cartItems = await db.all(getCartItems, [cart[0].id]);
      let food;
      let drink;
      let sides;
      let total = 0;

      let isFood = false;
      let isDrinks = false;
      let isSides = false;

      for (item of cartItems) {
        if (item.foodId) {
          isFood = true;
        }
        if (item.drinkId) {
          isDrinks = true;
        }
        if (item.sidesId) {
          isSides = true;
        }
      }
      if (isFood) {
        let getFood = [];
        for (item of cartItems) {
          let collectFood = await db.all("SELECT * FROM Food WHERE id = ?", [
            item.foodId,
          ]);
          if (collectFood.length) {
            getFood.push(...collectFood);
            total += collectFood[0].price;
          }
        }
        food = getFood;
      }
      if (isDrinks) {
        let getDrink = [];
        for (item of cartItems) {
          let collectDrinks = await db.all("SELECT * FROM Drink WHERE id = ?", [
            item.drinkId,
          ]);
          if (collectDrinks.length) {
            getDrink.push(...collectDrinks);
            total += collectDrinks[0].price;
          }
        }
        drink = getDrink;
      }
      if (isSides) {
        let getSides = [];
        for (item of cartItems) {
          let collectSides = await db.all("SELECT * FROM Sides WHERE id = ?", [
            item.sidesId,
          ]);
          if (collectSides.length) {
            getSides.push(...collectSides);
            total += collectSides[0].price;
          }
        }
        sides = getSides;
      }

      const cartObj = { food: food, drink: drink, sides: sides, total: total };

      res.json(cartObj);
      return;
    }
    res.json({ status: "something went wrong" });
    return;
  });
};
