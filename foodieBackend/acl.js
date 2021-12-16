const acl = require("./accessList.json");

module.exports = (req, res, next) => {
  const path = req.path;
  const user = req.session.user;

  for (p of acl) {
    if (p.path === path && !p.roles.includes(user.role)) {
      res.json({ status: "Access denied!!" });
      return;
    }
  }
  next();
};
