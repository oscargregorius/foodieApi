

module.exports = (app, db) => {
  
  app.get("/menu", async (req, res) => {
    const query = "SELECT * FROM Menu";
    const list = await db.all(query);
    res.json(data);
  })
  

}