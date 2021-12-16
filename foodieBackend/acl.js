const acl = require("./accessList.json");

module.exports = (req, res, next) => {
  const path = req.path;
  const user = req.session.user;
  const usertest = user?.role ? user.role : "no role";

  for (p of acl) {
    if (p.path === path && !p.roles.includes(usertest)) {
      res.json({ status: "Access denied!!" });
      return;
    }
  }
  next();
};
