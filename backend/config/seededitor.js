const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = async () => {
  const exists = await User.findOne();
  if (!exists) {
    const hashed = await bcrypt.hash("editor@123", 10);
    await User.create({
      email: "editor@raman.com",
      password: hashed,
      role: "editor"
    });
    console.log("Single editor created");
  }
};
