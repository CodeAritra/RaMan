module.exports = (req, res, next) => {
  if (req.user.role !== "editor")
    return res.status(403).json({ msg: "Editor only" });
  next();
};
